const mongoose = require('mongoose')
require('./model')

const Book = mongoose.model('Book')

let book = new Book({
  author: 'authorTest',
  name: 'zhangsan',
  publishTime: new Date()
})
book.save((err) => {
  if (err) {
    console.log('保存失败')
  } else {
    console.log('保存成功')
  }
})