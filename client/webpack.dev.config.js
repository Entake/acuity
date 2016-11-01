const Path = require('path')
const Config = require('./config')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
  src: Path.join(__dirname, 'src'),
  public: Path.join(__dirname, 'public')
}

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?https://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: PATHS.public,
    filename: 'app.bundle.js',
    publicPath: '/'
  },

  target: 'web',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel',
          options: {
            presets: [
              ['es2015', { 'modules': false }],
              'stage-1',
              'react'
            ],
            plugins: [
              'react-hot-loader/babel',
              'transform-runtime',
              'transform-class-properties',
              'transform-decorators-legacy'
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css'
          }
        ]
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.css']
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new Webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.ejs',
      xhtml: true,
      css: false,
      title: `${Config.html.title} (dev)`,
      themeColor: Config.html.themeColor
    }),
    new Webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new Webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/assets`, to: 'assets' }
    ])
  ]
}
