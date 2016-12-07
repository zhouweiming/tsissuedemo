var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {

  output: {
    path: helpers.root('public'),
    publicPath: 'http://7xlaxs.com2.z0.glb.qiniucdn.com/ops/',
    filename: 'assets/[name].[chunkhash].js',
    chunkFilename: 'assets/[name].[chunkhash].js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: helpers.root('public', 'img/favicon.ico'),
      template: helpers.root('views', 'layout.ejs'),
      filename: helpers.root('views', 'layout-production.ejs')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    })
  ]
});
