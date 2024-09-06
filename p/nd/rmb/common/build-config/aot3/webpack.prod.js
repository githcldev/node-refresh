const helpers = require('./helpers');
const buildUtils = require('./build-utils');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
function getUglifyOptions(supportES2015, enableCompress) {
  const uglifyCompressOptions = {
    pure_getters: true /* buildOptimizer */,
    passes: 2 /* buildOptimizer */
  };
  return {
    ecma: supportES2015 ? 6 : 5,
    warnings: false, // TODO verbose based on option?
    ie8: false,
    mangle: true,
    compress: enableCompress ? uglifyCompressOptions : false,
    output: {
      ascii_only: true,
      comments: false
    }
  };
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
      path: helpers.root('dist/prod'),
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
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          include: [helpers.root('client/src/lib/aot3', 'node_modules')]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: sourceMapEnabled,
          parallel: true,
          cache: helpers.root('webpack-cache/uglify-cache'),
          uglifyOptions: getUglifyOptions(supportES2015, true)
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name]-[hash].css', chunkFilename: '[name]-[chunkhash].css' }),
      new HashedModuleIdsPlugin()
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