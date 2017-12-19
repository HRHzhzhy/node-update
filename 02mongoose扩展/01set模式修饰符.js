/**
 * 分三种：
 * 预定义的修饰符
 * 自定义setter修饰符，保存数据之前会触发
 * 自定义getter修饰符，取到文档对象后会触发
 */

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2017/dbname')

const UserSchema = new mongoose.Schema({
  nickName: {
    type: String,
    default: 'new user',
    // set 修饰符，修改属性的值
    set: function (name) {
      if (name.indexOf('Hello') !== 0) {
        return 'Hello ' + name
      }
      return name
    }
  }
})
// 使用定义好的schema创建model
const User = mongoose.model('User', UserSchema)

let user = new User({
  nickName: '    test trim      '
})

console.log(user)
/**
 * { _id: 5a273fc931a5e9853776aa0d,
  regTime: 2017-12-06T00:54:33.921Z,
  nickName: 'test trim' }
 */