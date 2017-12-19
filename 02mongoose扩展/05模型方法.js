/**
 * 两种：
 * 静态方法，定义在schema.statics上
 * 实例方法, 定义在 Schema.methods上
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2017/dbname')

const BookSchema = new mongoose.Schema({
  name: String,
  isBn: Number
})
// 静态方法
BookSchema.statics.findByISBN = function (isbn, cb) { // 这里不能用箭头函数，使用后会报错，找不到this
  this.findOne({isBn: isbn}, function(err, doc) {
    cb(err, doc)
  })
}
// 实例方法
BookSchema.methods.print = function () {
  console.log('book info:', this.name, this.isBn)
}

const Book = mongoose.model('Book', BookSchema) 
let book = new Book({
  name: 'bookName',
  isBn: 123
})
book.save((err) => {
  if (err) {
    return console.log('save err')
  }
  // 调用静态方法
  Book.findByISBN(123, (err, doc) => {
    console.log(doc)
  })
  // 调用实例方法
  book.print()
})