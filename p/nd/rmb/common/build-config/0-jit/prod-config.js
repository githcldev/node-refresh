var pathHelp = require('../variables');
module.exports = {
  module: {
    rules: [
    {
      test: /\.(sass|scss)$/,
      use: [
        'to-string-loader',
        'style-loader',
        { 
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [pathHelp.nm],
            data: "$env: " + process.env.NODE_ENV + ";"
          },
        },
      ]
    }, {
      test: /\.css$/,
      include: pathHelp.client.src,
      use: [
        'style-loader',
        'raw-loader',
      ]
    },
    { test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=5'
      ] 
    }, {
      test: /\.(woff|woff2|ttf|eot|ico|otf)$/,
      use: 'file-loader?name=assets/[hash].[ext]'
    },
  ]},
  plugins: [
    // new pathHelp.gWebpack.core.optimize.AggressiveSplittingPlugin({
    //   minSize: 50000,
    //   maxSize: 240000
    // }),
    // new pathHelp.gWebpack.core.optimize.AggressiveMergingPlugin({
    //   minSizeReduce: 0.5
    // }),
    new pathHelp.gWebpack.core.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new pathHelp.gWebpack.core.NoEmitOnErrorsPlugin(), // skip build on error
  ],
  optimization: {
    minimizer: [
      // new pathHelp.gWebpack.plugins.uglifyJs({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: false // set to true if you want JS source maps
      // }),
      new pathHelp.gWebpack.plugins.optimizeCSSAssets({}),
      // new pathHelp.gWebpack.plugins.closure({mode: 'STANDARD'}, {}),
    ],
    minimize: true,
    mangleWasmImports: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    occurrenceOrder: true,
    concatenateModules: true,
    sideEffects: true,
  },
  bail: true,
  stats: 'none',
  mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  output: {
    path: pathHelp.dist.prodJit,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
}