var path           = require('path');
var webpack        = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

var makeConfig = options => {
  return {
    entry: {
      app: ['./src/index.jsx']
    },
    output: {
      path: path.resolve(__dirname, 'dest'),
      publicPath: options.debug ? 'http://localhost:8080/' : 'http://www.h5coder.com/',
      filename: 'js/[hash:8].[name].js',
      sourceMapFilename: '[file].map'
    },
    resolve: {
    },
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      })
      // new webpack.ProvidePlugin({
      //   React: 'react',
      //   ReactDOM: 'react-dom'
      // })
    ]
  }
}

module.exports = makeConfig;