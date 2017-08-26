const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: "css-loader",
            fallback: "style-loader",
          })
      },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      },
    ]
  },
  devtool: 'source-map',
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin("styles.css")]
}
