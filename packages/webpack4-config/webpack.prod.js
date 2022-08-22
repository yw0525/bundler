const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackExternals = require('html-webpack-externals-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    index02: './src/index02.js'
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]'
            },
          }
        ]
      }
    ]
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      chunks: ['index'],
      excludeChunks: ['node_modules'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    })
  ]
}
