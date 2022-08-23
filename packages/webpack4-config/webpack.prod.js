const path = require('path')
const { merge } = require('webpack-merge')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackExternals = require('html-webpack-externals-plugin')
const SpeedMesaureWebpackPlugin = require('speed-measure-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const baseConfig = require('./webpack.base')

const config = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        // use externals replace splitChunks with vendors
        // vendors: {
        //   test: /(react|react-dom)/,
        //   name: 'vendors',
        //   chunks: 'all',
        //   priority: -10
        // },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: -20
        }
      }
    }
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new HtmlWebpackExternals({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
          global: 'ReactDOM'
        }
      ]
    }),
    // new BundleAnalyzerPlugin()
  ]
})

module.exports = new SpeedMesaureWebpackPlugin().wrap(config)
