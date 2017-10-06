const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  devtool: 'sourcemap',
  output: {
    publicPath: '/build/',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    open: true,
    openPage: 'index.html',
    inline: true,
    noInfo: true,
    port: 3000
  }
};
