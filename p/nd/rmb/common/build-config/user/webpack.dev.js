const helpers = require('./helpers');
const buildUtils = require('./build-utils');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
module.exports = function(options) {
  const ENV = (process.env.ENV = process.env.NODE_ENV = 'development');
  const HOST = process.env.HOST || 'localhost';
  const PORT = process.env.PORT || 3010;
  const METADATA = Object.assign({}, buildUtils.DEFAULT_METADATA, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: helpers.hasProcessFlag('hot'),
    PUBLIC: process.env.PUBLIC_DEV || HOST + ':' + PORT
  });
  return webpackMerge(commonConfig({ env: ENV, metadata: METADATA }), {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: helpers.root('dist/client/dev/user'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[file].map',
      chunkFilename: '[id].chunk.js',
      library: 'ac_[name]',
      libraryTarget: 'var'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: [helpers.root('client/src/lib/user', 'node_modules')]
        },
        {
          test: /\.less$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          }, {
            loader: 'less-loader', options: {
              sourceMap: true,
              paths: [
                helpers.root('node_modules')
              ]
            }
          }],
          include: [helpers.root('client/src/lib/user', 'node_modules')]
        }
      ]
    },
    plugins: [
    ],
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      hot: METADATA.HMR,
      public: METADATA.PUBLIC,
      historyApiFallback: true,
      watchOptions: {
        // ignored: /node_modules/
      },
      setup: function(app) {
      }
    },
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false,
      fs: 'empty'
    }
  });
};