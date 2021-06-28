const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app.js', //配置入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), //定义输出目录
    filename: 'bundle.js', //定义输出文件名称
  },
  module: {
    rules: [
      {
        test: /\.(js$|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'), //server文件的根目录
    compress: true, //开启gzip
    port: 3000, //端口
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html'),
    }),
  ],
};
