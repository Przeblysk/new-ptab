/*
 * @Author: Przeblysk
 * @Date: 2021-09-17 20:00:00
 * @LastEditTime: 2021-09-17 20:06:11
 * @LastEditors: Przeblysk
 * @Description: 
 * @FilePath: /new-ptab/webpack.config.dev.js
 * 
 */
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.config.js')

module.exports =  merge(baseConf, {
  devtool: 'inline-source-map',
})