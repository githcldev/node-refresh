const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// import { ReactLoadablePlugin } from 'react-loadable/webpack';
const config = require('./wp.config.js');
const wpConfig = {
  tempPathEjs: path.resolve(__dirname, "../../../client/src/lib/admin/index.ejs"),
  tempPathHtml: path.resolve(__dirname, "../../../client/src/lib/admin/index.html"),
  prodIndexPath: path.resolve(__dirname, "../../../dist/client/prod/admin/index.html"),
  reactJsProdOutFolder: path.resolve(__dirname, "../../../dist/client/prod/admin/_"),
  prodFolder: path.resolve(__dirname, "../../../dist/client/prod/admin/")
}
const env = "production";
config.mode = env;
config.devtool = 'hidden-source-map'
config.cache = false;
config.bail = true;
config.output = {
  filename: '[name].[chunkhash:8].js',
  chunkFilename: '[id].[chunkhash:8].chunk.js',
  path: wpConfig.reactJsProdOutFolder
}
config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  },{
    test: /\.less$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
  },
]);
config.optimization = {
  minimize: true,
  mangleWasmImports: true,
  removeAvailableModules: true,
  removeEmptyChunks: true,
  mergeDuplicateChunks: true,
  occurrenceOrder: true,
  concatenateModules: true,
  sideEffects: true,    
  splitChunks: {
    // Auto split vendor modules in production only
    chunks: 'all'
  }
}
config.plugins.push(
  // new webpack.optimize.OccurenceOrderPlugin(),
  // new CleanWebpackPlugin([wpConfig.reactJsProdOutFolder]),
  new CompressionPlugin({
    test: /\.jsx?$|\.css$|\.(less|less)$|\.html$/,
    threshold: 10240
  }),
  // Minimizing style for production
  new OptimizeCssAssetsPlugin(),
  // Smaller modular Lodash build
  new LodashModuleReplacementPlugin(),
  // Plugin to compress images with imagemin
  // Check "https://github.com/Klathmon/imagemin-webpack-plugin" for more configurations
  // new ImageminPlugin(),
  // Visualize all of the webpack bundles
  // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
  // for more configurations
  new BundleAnalyzerPlugin({
    analyzerMode: process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled'
  }),
  new HashedModuleIdsPlugin(),
  new CopyWebpackPlugin(
    [
      { from: 'client/src/lib/admin/public/assets', to: '../assets' },
      { from: 'client/src/lib/admin/public/favicon.ico', to: '../' }
    ]
  ),
);
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
  }
}))
config.plugins.push(new HtmlWebpackPlugin({
  template: wpConfig.tempPathEjs,
  filename: '../index.ejs',
  inject: 'body',
}));
config.plugins.push(new HtmlWebpackPlugin({
  template: wpConfig.tempPathHtml,
  filename: '../index.html',
  inject: 'body'
}));
config.plugins.push(new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css'
}));
config.plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
}));
module.exports = config;