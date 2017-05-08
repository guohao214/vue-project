var utils = require('./utils')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks

module.exports = function (buildDir) {
  var baseWebpackConfig = require('./webpack.base.conf')(buildDir)

  var entryIndexHtml = baseWebpackConfig.entryIndexHtml;
  delete baseWebpackConfig.entryIndexHtml;

  Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
  })

  return merge(baseWebpackConfig, {
    module: {
      rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    devtool: '#source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': config.dev.env
      }),
      // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(entryIndexHtml),
        inject: true
      }),
      new FriendlyErrorsPlugin()
    ]
  })
}



