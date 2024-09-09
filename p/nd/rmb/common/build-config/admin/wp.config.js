const path = require('path');
const wpConfig = {
  entryFolderPath: path.resolve(__dirname, "../../../client/src/lib/admin/"),
  entryPath: path.resolve(__dirname, "../../../client/src/lib/admin/index.js"),
  nmPath: path.resolve(__dirname, "../../../node_modules"),
}
module.exports = {
  entry: [
    wpConfig.entryPath
  ],
  stats : 'verbose', // errors-only, minimal, none, normal, verbose, detailed
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
        exclude: [path.resolve(__dirname, "../../../client/src/lib/admin/"), path.resolve(__dirname, "../../../node_modules/")]
      }, {
        test: /\.less$/,
        use: ['to-string-loader', 'css-loader', 'less-loader'],
        exclude: [path.resolve(__dirname, "../../../client/src/lib/admin/"), path.resolve(__dirname, "../../../node_modules/")]
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
            // query: {
            //   optipng: { optimizationLevel: 7 },
            //   mozjpeg: { progressive: true },
            //   gifsicle: { interlaced: false },
            //   pngquant: { quality: '75-90', speed: 3 },
            // },
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
  ],
  performance: {
    hints: false,
  },
};