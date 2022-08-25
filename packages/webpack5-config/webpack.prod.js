const path = require('path')
const { merge } = require('webpack-merge')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: 'none',
  devtool: 'nosources-source-map',
  plugins: [
    // use html-webpack-plugin move favicon.icon
    // new CopyWebpackPlugin({
    //   patterns: ['public']
    // })
  ]
})
