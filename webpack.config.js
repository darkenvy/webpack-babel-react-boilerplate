const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'scripts.min.js'
  },
  module: {
    loaders: [{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }]
  },
  plugins: [HtmlWebpackPluginConfig, new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })]
};
