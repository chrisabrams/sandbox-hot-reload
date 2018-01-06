import HMR from '../utils/hmr.js'
const path = require('path')
const serveStatic = require('serve-static')

module.exports = function devMiddleware(server) {

  HMR(server)

  server.get('/static', serveStatic(path.join(__dirname, '../../static')))

  server.get('*', (req, res) => {
    res.render('development', {htmlWebpackPlugin: {
      options: {
        title: 'Sandbox'
      }
    }})
  })

  // catch 404 and forward to error handler
  server.use(function(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // development error handler
  server.use(function(err, req, res, next) {
    console.error('error : ', err)
    res.status(err.status || 500)
  })

}
