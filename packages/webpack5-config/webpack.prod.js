const path = require('path')
const { merge } = require('webpack-merge')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // use html-webpack-plugin move favicon.icon
    // new CopyWebpackPlugin({
    //   patterns: ['public']
    // })
  ]
})
