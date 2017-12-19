const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2017/dbname')

const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    default: 'new user'
  },
  regTime: {
    type: Date,
    default: Date.now
  }
})
// 使用定义好的schema创建model
const User = mongoose.model('User', UserSchema)
// 创建实例，不需要传递参数就能创建
let user = new User()

console.log(user)
/**
 * { _id: 5a27398f79686783fb3b89fe,
  regTime: 2017-12-06T00:27:59.001Z,
  nickName: 'new user' }
 */