const path = require("path");

const merge = require('webpack-merge');//webpack配置文件合并

const baseConfig = require("./webpack.base.js");//基础配置



let config = {
  mode: 'development',

};



module.exports = merge(baseConfig, config);
