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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.attached\.less$/,
        use: [
          // { loader: 'style-loader/useable' }  useable 挂载
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.attached.less', '.global.less', '.less']
  },
  plugins: [
    new HtmlWebpackPlugin({
      api: 'http://10.20.0.56:8088/',
      title: 'react',
      template: resolve('index.html'),
    }),
  ]
};
