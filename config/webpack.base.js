const path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {

  //入口文件

  entry: {

    main: resolve('../src/client'),

  },

  //出口文件

  output: {

    publicPath: '/',
    filename: 'js/[name].js',
    path: resolve('../dist'),
    chunkFilename: 'js/chunks/[id].js',

  },

  module: {},

  plugins: [
    new HtmlWebpackPlugin({
      api: 'http://10.20.0.56:8088/',
      title: 'react',
      template: resolve('index.html'),
    }),
  ]

};
