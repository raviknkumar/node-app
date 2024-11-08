const path = require('path');
const { DefinePlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const config = {
  entry: ['./index.js'],
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFormat: 'commonjs'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

module.exports = config;