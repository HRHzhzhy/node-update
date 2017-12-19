var mongoose = require('mongoose')
require('./model.js')
const Book = mongoose.model('Book')
Book.find({}, (err, docs) => {
  if (err) {
    return
  }
  console.log(docs)
})
Book.findOne({name: 'zhangsan'}, (err, doc) => { // 查询到的结果是一个文档对象
  if (err) {
    return
  }
  console.log(doc)
  // 可以直接对这个文档对象进行修改，save, remove操作
  doc.author = 'lisi' // 直接修改
  doc.save() // 保存文档对象
  doc.remove() // 删除文档对象
})