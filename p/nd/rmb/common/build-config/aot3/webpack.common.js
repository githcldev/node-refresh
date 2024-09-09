const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackInlineManifestPlugin = require('webpack-inline-manifest-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const buildUtils = require('./build-utils');
module.exports = function(options) {
  const isProd = options.env === 'production';
  const APP_CONFIG = require(process.env.ANGULAR_CONF_FILE || (isProd ? './config.prod.json' : './config.dev.json'));
  const METADATA = Object.assign({}, buildUtils.DEFAULT_METADATA, options.metadata || {});
  const GTM_API_KEY = process.env.GTM_API_KEY || APP_CONFIG.gtmKey;
  const ngcWebpackConfig = buildUtils.ngcWebpackSetup(isProd, METADATA);
  const supportES2015 = buildUtils.supportES2015(METADATA.tsConfigPath);
  const entry = {
    polyfills: './client/src/lib/aot3/polyfills.browser.ts',
    main: './client/src/lib/aot3/main.browser.ts'
  };
  Object.assign(ngcWebpackConfig.plugin, {
    tsConfigPath: METADATA.tsConfigPath,
    mainPath: entry.main
  });
  return {
    entry: entry,
    resolve: {
      mainFields: [...(supportES2015 ? ['es2015'] : []), 'browser', 'module', 'main'],
      extensions: ['.ts', '.js', '.json'],
      modules: [helpers.root('client/src/lib/aot3/'), helpers.root('node_modules')],
      alias: buildUtils.rxjsAlias(supportES2015)
    },
    module: {
      rules: [
        ...ngcWebpackConfig.loaders,
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [helpers.root('client/src/lib/aot3', 'node_modules')]
        },
        {
          test: /\.scss$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader'],
          exclude: [helpers.root('client/src/lib/aot3', 'node_modules')]
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('client/src/lib/aot3/index.html')]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        },
        {
          test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new DefinePlugin({
        ENV: JSON.stringify(METADATA.ENV),
        HMR: METADATA.HMR,
        AOT: METADATA.AOT,
        'process.env.ENV': JSON.stringify(METADATA.ENV),
        'process.env.NODE_ENV': JSON.stringify(METADATA.ENV),
        'process.env.HMR': METADATA.HMR
        // 'FIREBASE_CONFIG': JSON.stringify(APP_CONFIG.firebase),
      }),
      new CopyWebpackPlugin(
        [{ from: 'client/src/lib/aot3/assets', to: 'assets' }, { from: 'client/src/lib/aot3/meta' }],
        isProd ? { ignore: ['mock-data/**/*'] } : undefined
      ),
      new HtmlWebpackPlugin({
        template: 'client/src/lib/aot3/index.html',
        title: METADATA.title,
        chunksSortMode: function(a, b) {
          const entryPoints = ['inline', 'polyfills', 'sw-register', 'styles', 'vendor', 'main'];
          return entryPoints.indexOf(a.names[0]) - entryPoints.indexOf(b.names[0]);
        },
        metadata: METADATA,
        gtmKey: GTM_API_KEY,
        inject: 'body',
        xhtml: true,
        minify: isProd
          ? {
              caseSensitive: true,
              collapseWhitespace: true,
              keepClosingSlash: true
            }
          : false
      }),
      new ScriptExtHtmlWebpackPlugin({
        sync: /inline|polyfills|vendor/,
        defaultAttribute: 'async',
        preload: [/polyfills|vendor|main/],
        prefetch: [/chunk/]
      }),
      new HtmlElementsPlugin({
        headTags: require('./head-config.common')
      }),
      new AngularCompilerPlugin(ngcWebpackConfig.plugin),
      new WebpackInlineManifestPlugin()
    ],
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
};