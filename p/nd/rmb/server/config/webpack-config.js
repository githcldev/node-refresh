const path = require('path');
var webpack = require('webpack')
var wne = require('webpack-node-externals');
const rootPath = path.resolve(__dirname, "../../");
module.exports = {
  entry: [
    rootPath + '/server/config/express-server.js'
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: []
  },
  plugins:[
    new webpack.IgnorePlugin(/^#!.*/, /node_modules$/)
  ],
  target: 'node',
  output: {
    path: rootPath + '/server/b/',
    filename: 'b.js'
  },
  externals: [wne()]
}