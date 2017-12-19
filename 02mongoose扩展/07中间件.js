/**
中间件
1.文档中间件
使用时机init/validate/save/remove
2.查询中间件
count/find/findOne/...
从执行时机上：
1.预处理中间件
2.后置处理中间件 Schema.post()
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2017/dbname')

const ResellerSchema = new mongoose.Schema({
  address: String
})

ResellerSchema.post ('save', function(next) {
  console.log('save 之后的中间件处理')
  next()
})
ResellerSchema.pre('save', true, function(next, done) {
  console.log('save 之前 的中间件处理')
  next()
  done()
})

const Reseller = mongoose.model('Reseller', ResellerSchema)

let reseller = new Reseller({
  address: 'this is address'
})
reseller.save()