const config = require('./wp.config.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
config.mode = 'development';
config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],
  }, {
    test: /\.less$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
  },
]);
const wpConfig = {
  tempPath: path.resolve(__dirname, "../../../client/src/lib/admin/index.html"),
  distIndexPath: path.resolve(__dirname, "../../../dist/client/dist/admin/index.html"),
  distFolder: path.resolve(__dirname, "../../../dist/client/dist/admin/")
}
config.devServer = {
  contentBase: wpConfig.distFolder,
  historyApiFallback: true,
  inline: true,
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
  MiniCssExtractPluginConfig,
  new CopyWebpackPlugin(
    [
      { from: 'client/src/lib/admin/public/assets', to: './assets' },
      { from: 'client/src/lib/admin/public/favicon.ico', to: './' }
    ]
  ),
)
module.exports = config;