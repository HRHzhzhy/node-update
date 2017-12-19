/**
 * 不需要存储这个属性，通过其他的属性或方法计算得到
 * 例如：姓，名
 * 全名： 姓+名
 * 
 * 注意： 模型实例转换成JSON时，不会出现虚拟属性字段，需要特殊设置
 * PersonSchema.set('toJSON', {getters: false, virtual: true}) 
 */

 const mongoose = require('mongoose')

 const PersonSchema = new mongoose.Schema({
  firstName: {
    type: String,
    get: function (firstName) {
      return 'this is firstName getter' + firstName
    }
  },
  lastName: String
 })
 // 定义虚拟属性
PersonSchema.virtual('fullName').get(function(){
  return this.firstName + this.lastName
})

PersonSchema.set('toJSON', {getters: false, virtual: true}) // 设置 toJSON时的参数，是否使用getter，和虚拟属性virtual

const Person = mongoose.model('Person', PersonSchema)
let person = new Person({
  firstName: '1111first1111',
  lastName: 'last'
})
console.log('user full name:', person.fullName) // user full name: firstlast
console.log('toJSON=======', JSON.stringify(person))