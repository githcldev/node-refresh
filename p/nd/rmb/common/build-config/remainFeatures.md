


---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------



---------------------------------------

code split is always an interesting topic.
  and enhance performance tremendously
  kindly consider code-split always

---------------------------------------

import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
plugins.push(
  // Production
  new webpack.HashedModuleIdsPlugin(),
  new CompressionPlugin({
    test: /\.jsx?$|\.css$|\.(scss|sass)$|\.html$/,
    threshold: 10240
  }),
  // Minimizing style for production
  new OptimizeCssAssetsPlugin(),
  // Smaller modular Lodash build
  new LodashModuleReplacementPlugin(),
  // Plugin to compress images with imagemin
  // Check "https://github.com/Klathmon/imagemin-webpack-plugin" for more configurations
  new ImageminPlugin({
    pngquant: { quality: '95-100' }
  }),
  // Visualize all of the webpack bundles
  // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
  // for more configurations
  new BundleAnalyzerPlugin({
    analyzerMode: process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled'
  })
);

mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval' : 'hidden-source-map',

  optimization: {
    splitChunks: {
      // Auto split vendor modules in production only
      chunks: isDev ? 'async' : 'all'
    }
  },

  cache: isDev,