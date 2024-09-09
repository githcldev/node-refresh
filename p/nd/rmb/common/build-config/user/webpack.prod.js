const helpers = require('./helpers');
const buildUtils = require('./build-utils');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
// const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
function getTenserOptions() {
  const tenserCompressOptions = {
    pure_getters: true /* buildOptimizer */,
    passes: 2 /* buildOptimizer */
  };
  return {
    ecma: undefined,
    warnings: false,
    parse: {},
    compress: tenserCompressOptions,
    mangle: true, // Note `mangle.properties` is `false` by default.
    module: false,
    output: null,
    toplevel: false,
    nameCache: null,
    ie8: false,
    keep_classnames: undefined,
    keep_fnames: false,
    safari10: false,
    output: {
      ascii_only: true,
      comments: false
    }
  }
}
module.exports = function(env) {
  const ENV = (process.env.NODE_ENV = process.env.ENV = 'production');
  const supportES2015 = buildUtils.supportES2015(buildUtils.DEFAULT_METADATA.tsConfigPath);
  const sourceMapEnabled = process.env.SOURCE_MAP === '1';
  const METADATA = Object.assign({}, buildUtils.DEFAULT_METADATA, {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    ENV: ENV,
    HMR: false
  });
  METADATA.envFileSuffix = METADATA.E2E ? 'e2e.prod' : 'prod';
  return webpackMerge(commonConfig({ env: ENV, metadata: METADATA }), {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: helpers.root('dist/client/prod/user'),
      filename: '[name].[chunkhash].bundle.js',
      sourceMapFilename: '[file].map',
      chunkFilename: '[name].[chunkhash].chunk.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
          include: [helpers.root('client/src/lib/aot3', 'node_modules')]
        },
        {
          test: /\.less$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
          include: [helpers.root('client/src/lib/aot3', 'node_modules')]
        }
      ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
          sourceMap: sourceMapEnabled,
          parallel: true,
          extractComments: true,
          cache: helpers.root('webpack-cache/terser-cache'),
          terserOptions: getTenserOptions(),
        })],
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name]-[hash].css', chunkFilename: '[name]-[chunkhash].css' }),
      new HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        template: 'client/src/lib/user/index.ejs',
        filename: 'user.ejs',
        title: METADATA.title,
        chunksSortMode: function(a, b) {
          const entryPoints = ['inline', 'polyfills', 'sw-register', 'styles', 'vendor', 'main'];
          return entryPoints.indexOf(a.names[0]) - entryPoints.indexOf(b.names[0]);
        },
        inject: 'body',
        xhtml: true,
        minify: {
          caseSensitive: true,
          collapseWhitespace: true,
          keepClosingSlash: true
        }
      }),
      // new DynamicCdnWebpackPlugin({
      //   'env': 'production',
      //   'verbose': true,
      //   'only': []
      // })
    ],
    node: {
      global: true,
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false,
      fs: 'empty'
    }
  });
};