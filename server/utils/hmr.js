const webpack  = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

import devWebpackConfig from '../../webpack/development'

const HMR = (app) => {

  const compiler = webpack(devWebpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: devWebpackConfig.output.publicPath
  }))

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    reload: true
  }))

  return app
}

export default HMR
