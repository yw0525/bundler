const { merge } = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = require('./webpack.common')

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
