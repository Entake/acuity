const Path = require('path')
const Config = require('./config')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  src: Path.join(__dirname, 'src'),
  public: Path.join(__dirname, 'public')
}

module.exports = {

  devtool: 'cheap-module-source-map',

  entry: './src/index.js',

  output: {
    path: PATHS.public,
    publicPath: '/public/',
    filename: 'app.bundle.js'
  },

  target: 'web',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel',
            options: {
              presets: [
                ['es2015', { 'modules': false }],
                'stage-1',
                'react',
                'react-optimize'
              ],
              plugins: [
                'transform-runtime',
                'transform-class-properties',
                'transform-decorators-legacy'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css'
        })
        // TODO: Use the new 'use' syntax when supported - see issue:
        // https://github.com/webpack/extract-text-webpack-plugin/issues/275
        // use: ExtractTextPlugin.extract({
        //   fallbackLoader: 'style-loader',
        //   loader: 'css-loader'
        // })
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.css']
  },

  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new Webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.ejs',
      xhtml: true,
      css: true,
      title: Config.html.title,
      description: Config.html.description,
      themeColor: Config.html.themeColor
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/assets`, to: 'assets' }
    ])
  ]
}
