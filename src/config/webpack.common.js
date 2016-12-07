var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

const is_development = process.env.NODE_ENV === "development";

let getEntry = () => {
  return {
      'common': ['./public/common.ts', hotMiddlewareScript],
      'index': ['./public/index.ts', hotMiddlewareScript]
    };
};

module.exports = {
  entry: getEntry(),

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ["awesome-typescript-loader", "angular2-load-children-loader"]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.ejs$/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["index", "common"]
    }),
    new DefinePlugin({
      'ENV': JSON.stringify(process.env.NODE_ENV),
      'HMR': is_development,
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
