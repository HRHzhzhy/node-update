const mongoose = require('mongoose')
let uri = 'mongodb://userName:password@hostname:port/databasename';
uri = 'mongodb://localhost:2017/dbname'
// 1.连接数据库
mongoose.connect(uri) // 连接数据库

// 2.建立数据结构和类型Schema
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  publishTime: Date
})

// 3.创建model对象，建立node与mongodb联系
mongoose.model('Book', BookSchema)