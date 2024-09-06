console.log('client index-react wp-prod-config')
const path = require('path');
const webpack = require('webpack');
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
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const config = require('./wp.config.js');
console.log(path.resolve(__dirname, "../../../dist/client/prod/indexR") + "/");
const wpConfig = {
  tempPathEjs: path.resolve(__dirname, "../../../client/src/lib/index/index.ejs"),
  tempPathHtml: path.resolve(__dirname, "../../../client/src/lib/index/index.html"),
  prodIndexPath: path.resolve(__dirname, "../../../dist/client/prod/indexR/index.html"),
  reactJsProdOutFolder: path.resolve(__dirname, "../../../dist/client/prod/indexR"),
  prodFolder: path.resolve(__dirname, "../../../dist/client/prod/indexR/")
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
  }, {
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
  // Following compression works well, but use it for produc only
  // Later use html-webpack-change-assets-extension-plugin
  // https://github.com/webpack-contrib/compression-webpack-plugin/issues/75
  // new CompressionPlugin({
  //   test: /\.jsx?$|\.css$|\.(less|less)$|\.html$/,
  //   threshold: 10240
  // }),
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
);
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
  }
}))
config.plugins.push(new HtmlWebpackPlugin({
  template: wpConfig.tempPathEjs,
  filename: 'index.ejs',
  inject: 'body',
  // minify: true,
  /*
  meta: {
      'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
      // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
      // Which equals to the following http header: `Content-Security-Policy: default-src https:`
      'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
      // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
      // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
    }
    */
}));
config.plugins.push(new HtmlWebpackPlugin({
  template: wpConfig.tempPathHtml,
  filename: 'index.html',
  inject: 'body'
}));
config.plugins.push(new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css'
}));
config.plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
}));
config.externals = {
  'react': 'React'
}

config.plugins.push(new DynamicCdnWebpackPlugin({
  'env': 'production',
  'verbose': false,
  'only': [
    'React',
    'react-is', 
    'prop-types',
    'react-dom',
    'react-router-dom',
    'redux',
    'react-redux',
    'redux-saga',

    'tiny-warning', 
    'tiny-invariant', 
    'whatwg-fetch',

    'classnames',

    'value-equal', 
    'resolve-pathname', 
    
    'js-cookie'
  ]
}));

// config.plugins.push(new DynamicCdnWebpackPlugin({
//   'env': 'production',
//   'verbose': true
// }));

module.exports = config;