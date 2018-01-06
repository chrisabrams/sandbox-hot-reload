import path from 'path'
import webpack from 'webpack'
import qs from 'querystring'
import root from './root'

const src = path.join(root, 'src')

const babelQuery = Object.assign({}, require('./babelrc/browser'))
babelQuery.plugins = babelQuery.plugins.concat([
  'transform-decorators-legacy',
  'react-hot-loader/babel'
])

export default {
  devtool: 'eval-source-map',
  context: src,
  entry: {
    app: [
      //'react-hot-loader/patch',
      'webpack-hot-middleware/client?noInfo=false',
      './application.js'
    ]
  },
  output: {
    filename: 'app.js',
    chunkFilename: '[name]_[chunkhash].js',
    path: path.join(root, 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': false,
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: babelQuery,
        //include: [src]
        exclude: /node_modules/
      },
    ]
  }
}
