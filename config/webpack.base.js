const path = require("path");
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  //入口文件
  entry: resolve('../src/client'),
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
          { loader: 'style-loader/useable' },  //useable  使用style.use() 或 style.unuse();
          // { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.global\.less$/,
        exclude: /\.attached\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
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
    extensions: ['.js', '.jsx', '.attached.less', '.global.less', '.less'],
    alias: {
      '$lib': resolve('../src/lib'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      api: 'http://10.20.0.56:8088/',
      title: 'react',
      template: resolve('index.html'),
    }),
    new webpack.NamedChunksPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.ProvidePlugin({
      react: 'react',
      _: 'underscore'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: 10,
          reuseExistingChunk: false,
          test: /node_modules/
        },
        async: {
          name: 'async',
          chunks: 'async',
          priority: 20,
          reuseExistingChunk: false,
          test: /node_modules/
        },
      }
    },
  },
};

// chunks: 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
// minSize: 表示在压缩前的最小模块大小，默认为0；
// minChunks: 表示被引用次数，默认为1；
// maxAsyncRequests: 最大的按需(异步)加载次数，默认为1；
// maxInitialRequests: 最大的初始化加载次数，默认为1；
// name: 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
// cacheGroups: 缓存组。
