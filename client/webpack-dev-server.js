const Webpack = require('webpack')
const WebpackConfig = require('./webpack.dev.config')
const WebpackDevServer = require('webpack-dev-server')

module.exports = new WebpackDevServer(Webpack(WebpackConfig), {
  historyApiFallback: true,
  hot: true,
  inline: true,
  progress: true,
  https: true, // Can be set to true, for testing HTTP/2
  clientLogLevel: 'none',
  content: '/public',
  publicPath: '/',
  port: process.env.PORT || 3000,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  proxy: {
    '/api/*': {
      target: 'http://localhost:8080'
    }
  }
}).listen(3000, 'localhost', (err, res) => {
  if (err) return console.warn(err)

  console.log('🚧  Webpack development server listening at https://localhost:3000')
})
