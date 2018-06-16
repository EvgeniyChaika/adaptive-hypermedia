/* eslint-disable no-console */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(`-------NODE_ENV=${process.env.NODE_ENV}-------`);

module.exports = {
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'public/favicon/favicon.ico',
      template: path.join(__dirname, 'public/index.html')
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `yarn build`.
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};
