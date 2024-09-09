const path = require('path');
const wpConfig = {
  entryFolderPath: path.resolve(__dirname, "../../../client/src/lib/index/"),
  entryPath: path.resolve(__dirname, "../../../client/src/lib/index/index.js"),
  sharedModulePath: path.resolve(__dirname, '../../../client/src/lib/shared/index.js'),
  nmPath: path.resolve(__dirname, "../../../node_modules"),
}
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    C_SM: wpConfig.sharedModulePath,
    app: wpConfig.entryPath
  },
  resolve: {
    alias: {
      C_SM$: wpConfig.sharedModulePath
    }
  },
  stats : 'detailed', // errors-only, minimal, none, normal, verbose, detailed
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [wpConfig.entryFolderPath],
        exclude: [/node_modules/, wpConfig.nmPath]
      }, {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [path.resolve(__dirname, "../../../client/src/lib/index/"), path.resolve(__dirname, "../../../node_modules/")]
      }, {
        test: /\.less$/,
        use: ['to-string-loader', 'css-loader', 'less-loader'],
        exclude: [path.resolve(__dirname, "../../../client/src/lib/index/"), path.resolve(__dirname, "../../../node_modules/")]
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          // {
          //   loader: 'image-webpack-loader',
          //   query: {
          //     optipng: { optimizationLevel: 7 },
          //     mozjpeg: { progressive: true },
          //     gifsicle: { interlaced: false },
          //     pngquant: { quality: '75-90', speed: 3 },
          //   },
          // },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 8192,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'icons/[name].[ext]' },
      },
    ],
  },  
  plugins: [
    new CopyWebpackPlugin(
        [
          // { from: 'client/src/lib/index/app/json-data' },
          { from: 'node_modules/zangodb/dist/zangodb.min.js', to: './' },
          { from: 'client/src/lib/shared/json-data', to: './json-data/' }
        ],
        { ignore: ['mock-data/**/*'] }
      ),
  ],
  performance: {
    hints: false,
  },
};