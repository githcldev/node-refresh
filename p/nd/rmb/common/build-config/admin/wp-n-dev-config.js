const config = require('./wp.config.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
config.mode = 'development';
config.entry = [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client?reload=true',
  path.resolve(__dirname, "../../../client/src/lib/admin/index.js")
]
config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    test: /\.scss$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  {
    test: /\.less$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
  },
]);
const wpConfig = {
  tempPath: path.resolve(__dirname, "../../../client/src/lib/admin/index.html"),
  distIndexPath: path.resolve(__dirname, "../../../dist/client/dist/admin/index.html"),
  distFolder: path.resolve(__dirname, "../../../dist/client/dist/admin/"),
  tempPathEjs: path.resolve(__dirname, "../../../client/src/lib/admin/index.ejs"),
  tempPathHtml: path.resolve(__dirname, "../../../client/src/lib/admin/index.html"),
  prodIndexPath: path.resolve(__dirname, "../../../dist/client/prod/admin/index.html"),
  reactJsProdOutFolder: path.resolve(__dirname, "../../../dist/client/prod/admin/_"),
  prodFolder: path.resolve(__dirname, "../../../dist/client/prod/admin/")
}
config.devServer = {
  contentBase: wpConfig.distFolder,
  historyApiFallback: true,
  inline: true,
};
config.output = {
  filename: 'index-react.js',
  path: wpConfig.distFolder
}
const env = 'development';
const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
  }
});
const HtmlWebpackPluginConfig1 = new HtmlWebpackPlugin({
  template: wpConfig.tempPathEjs,
  filename: 'index.ejs',
  inject: 'body',
});
const HtmlWebpackPluginConfig2 = new HtmlWebpackPlugin({
  template: wpConfig.tempPathHtml,
  filename: 'index.html',
  inject: 'body'
});
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});
config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  WebpackDefinePluginConfig, 
  HtmlWebpackPluginConfig1, 
  HtmlWebpackPluginConfig2, 
  MiniCssExtractPluginConfig
)
module.exports = config;