const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    host: 'localhost',
    port: '8888',
    contentBase: path.resolve(__dirname, 'public'),
    watchOptions: {
      aggregateTimeout: 100,
      ignored: /node_modules/,
      poll: 500
    },
    stats: {
      warnings: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        debug: true,
        noInfo: false
      }
    })
  ]
});
