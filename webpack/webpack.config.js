var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/app.js']
  },
  devServer: {
    hot: true,
    stats: { colors: true },
    historyApiFallback: true,
    progress: true
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
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'  // 8kb
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: 'src/index.html',
      chunks: ['app']
    })
  ]
}
