const path = require("path");



module.exports = {

  //入口文件

  entry: {

    main: '../src/client'

  },

  //出口文件

  output: {

    publicPath: '/',
    filename: 'js/[name].js',
    path: resolve('../dist'),
    chunkFilename: 'js/chunks/[id].js',

  },

  module: {},

  plugins: []

};
