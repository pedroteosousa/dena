const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
  entry: {
    index: './src/client/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'lib/client'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.URL': JSON.stringify(process.env.URL),
      'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
    }),
  ],
}
