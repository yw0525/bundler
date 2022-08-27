const { merge } = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const baseConfig = require('./webpack.common')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    clean: true, // replace clean-webpack-plugin
    filename: '[name]-[contenthash:8].bundle.js'
  },
  // devtool: 'none',
  devtool: 'nosources-source-map',
  optimization: {
    // https://webpack.js.org/plugins/split-chunks-plugin/
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      minSize: 10000
    },
    minimizer: [new CssMinimizerPlugin(), '...']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    // use html-webpack-plugin move favicon.icon
    // new CopyWebpackPlugin({
    //   patterns: ['public']
    // })
    new MiniCssExtractPlugin()
  ]
})
