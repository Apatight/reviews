const webpack = require('webpack');
const path = require('path');

// See: https://stackoverflow.com/questions/37788142/webpack-for-back-end

const common = {
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('http://localhost:3003'),
    }),
  ],
  context: path.join(__dirname, '/client'),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
};

const client = {
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js',
  },
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module',
  },
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
];
