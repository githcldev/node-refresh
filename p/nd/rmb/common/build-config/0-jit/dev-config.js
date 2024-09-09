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
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|otf)$/,
      use: 'file-loader?name=assets/[name].[hash].[ext]'
    },
  ]},
  mode: "development", // "production", "none"
  output: {
    path: pathHelp.dist.devJit,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new pathHelp.gWebpack.core.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    watchOptions: {
      ignored: /node_modules/
    }
  },
  performance: {
    hints: 'warning', // false | "error" | "warning"
  },
  stats: 'errors-only', // errors-only, minimal, none, normal, verbose, detailed
  cache: true,
  serve: {
    // host: 'localhost',
    // hotClient: true, //false will completely disable webpack-hot-client and all automatic Hot Module Replacement functionality
    // logLevel: 'silent',//['trace','debug','info'(default),'warn','error','silent']
    // logTime: false, //to prepend each line of log output with a [HH:mm:ss] timestamp
    // on: {
      // 'build-started': () => {
      //   console.log(' --- build started! --- ');
      // },
      // 'listening': () => {
      //   console.log(' --- listening! --- ');
      // },
      // 'compiler-warning': () => {
      //   console.log(' --- compiler-warning! --- ');
      // },
      // 'compiler-error': () => {
      //   console.log(' --- compiler-error! --- ');
      // },
      // 'build-finished': () => {
      //   console.log(' --- build-finished! --- ');
      // },
    // }
  }
}