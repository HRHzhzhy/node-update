const mongoose = require('mongoose')
const config = require('./config')

module.exports = function () {
  // 1. 连接数据库
  const db = mongoose.connect(config.mongodbUri)
  // 2. 定义model
  require('../models/book.model')
  // 3. 返回数据库引用
  return db
}