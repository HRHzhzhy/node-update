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
    // set 修饰符，修改保存在数据库中属性的值
    set: function (name) {
      if (name.indexOf('Hello') !== 0) {
        return 'Hello ' + name
      }
      return name
    },
    get: function (name) { // 输出这个属性时，会自动添加 console.log(user.nickName)
      if (name.indexOf('你好') !== 0) {
        return '你好' + name
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
user.save((err) => {
  if (err) {
    return console.log(err)
  }
  console.log(user) // 输出整个user对象，不会走get
  console.log(user.nickName) // 输出这个属性的时候才会走get
})
// console.log(user)
/**
 
 */