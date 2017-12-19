/**
 * ORM：
 * 1.Object Relational Mapping 对象关系映射 【数据库中或其他文件中存储的对象与程序中的对象的关系映射】
 * 2.将文档数据库中的一个文档，或者关系数据库中的表的一行，映射为javascript中的一个对象
 * 3.操作对象，就可以完成对数据库的操作
 * 
 * WaterLine 是ORM中的一种
 * 1.支持主流数据库
 * 2.脱离sql
 * 3.使用同样代码操作不同数据库
 * 4.更易于理解的符号
 * 5.丰富的api方法、数据类型
 * 
 * 概念：
 * 1.适配器，实现对各种数据库的支持
 *  把统一的操作代码，转换成某种数据库所支持的数据库操作
 * 2.连接
 *  通过某个适配器，和具体的连接配置，实现数据库的连接
 * 3.数据集合
 *  定义具体的数据类型
 *  类似于Mongoose里的Model
 *  对应关系数据库中的表，文档数据库中的集合
 * 4.校验器
 *  执行数据检查
 * 5.生命周期回调
 *  创建时
 *  更新时
 *  删除时
 */
// 适配器
const mysqlAdapter = require('sails-mysql')
const mongoAdapter = require('sails-mongo')

// 连接

const connections = {
  mongo: {
    adapter: 'mongo',
    url: 'mongodb://localhost/waterline-sample'
  },
  mysql: {
    adapter: 'mysql',
    url: 'mysql://root:@localhost/waterlinesample'
  }
}
// 数据集合
const User = Waterline.Collection.extend({
  identity: 'user',
  connection: 'mongo',
  schema: true,
  attributes: {
    username: {
      type: 'string'
    }
  }

})