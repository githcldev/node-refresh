console.log('client index-react wp-dev-config')
const config = require('./wp.config.js');
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config.mode = 'development';
config.devtool = 'cheap-eval-source-map';
config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],
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
          path.resolve(__dirname, "../../../node_modules")
        ]
      }
    }],
    include: [
      path.resolve(__dirname, "../../../client/src/lib/index"),
      path.resolve(__dirname, "../../../node_modules")]
  }
]);

const wpConfig = {
  tempPath: path.resolve(__dirname, "../../../client/src/lib/index/index.html"),
  distIndexPath: path.resolve(__dirname, "../../../dist/client/dist/indexR/index.html"),
  distFolder: path.resolve(__dirname, "../../../dist/client/dist/indexR/")
}

config.devServer = {
  clientLogLevel: 'error', // 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
  stats: 'errors-only', // 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
  contentBase: wpConfig.distFolder,
  historyApiFallback: true,
  inline: true
};

config.output = {
  filename: '[name].js',
  path: wpConfig.distFolder
}

const env = 'development';

const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
  }
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: wpConfig.tempPath,
  filename: wpConfig.distIndexPath,
  inject: 'body'
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

config.plugins.push(
  WebpackDefinePluginConfig, 
  HtmlWebpackPluginConfig, 
  MiniCssExtractPluginConfig
)

module.exports = config;