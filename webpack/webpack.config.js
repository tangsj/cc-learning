var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js'
  },
  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('common.js'), // 提取公用模块 为独立文件
    new ExtractTextPlugin('main.css', {  // 样式打包文件
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin(), // 代码压缩 
    //new webpack.optimize.OccurenceOrderPlugin()
  ]
}