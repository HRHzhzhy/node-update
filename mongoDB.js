/**
 * 文档数据库
 * 集合和文档
 * 特点：
 *  1.BSON存储数据
 *  2.  相对丰富的查询操作
 *  3.  支持索引
 *  4.  支持副本集
 *  5.  支持分片
 *  6.  无模式
 *  7.  部署简单方便
 * 
 * 启动：
 * 1.创建db存放路径
 *  sudo mkdir -p /data/db
 * 2.启动数据库
 *  mongod --dbpath=/data/db --port=27017
 *  mongod --dbpath=/data/db --port=27017 --fork --syslog // 守护进程的方式启动，日志是系统日志
 * *  mongod --dbpath=/Users/zyz/data/db --port=27017 --fork --logpath=/Users/zyz/data/log/mongod.log // 守护进程的方式启动，指定日志路径
 mongod --dbpath=/Users/zyz/data/db --port=27017 --fork --logpath=/Users/zyz/data/log/mongod.log
about to fork child process, waiting until server is ready for connections.
forked process: 75146
child process started successfully, parent exiting
 * 3.关闭数据库
 *  mongod --shutdown
 *  或者 kill
 * 4.连接数据库
 * mongo 127.0.0.1:2017
 * 常用命令：
 * show dbs
 * show collections
 * 
 * db.collectionName.insert(JSONObject)
 * 
 * db.test.find({SearchTextObject})
 * { "_id" : ObjectId("5a25ec323192b4e246168325"), "name" : 123 }
 * 
 *  db.test.find().count()
 * 
 * db.test.update(条件，修改内容，是否所有的都修改)
 * db.test.save(跟新的内容)
 * 
 * db.test.insert(内容)
 * 
 * db.test.remove() // 只删除文档，不删除索引
 * 
 * mongoose:
 * 数据库连接
 *  const mongoose = require('mongoose')
    const uri = 'mongodb://userName:password@hostname:port/databasename';
    uri = 'mongodb://localhost/dbname'
    mongoose.connect(uri) // 连接数据库
 * Model：建立node对象与mongodb文档对象 对应；操作model等于操作mongdb文档
 * Schema：数据结构和数据类型，实现mongodb的模式
 * 
 * 使用步骤：
 // 1.连接数据库
mongoose.connect(uri) // 连接数据库

// 2.建立数据结构和类型Schema
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  publishTime: Date
})

// 3.创建model对象，建立node与mongodb联系
mogoose.model('Book', BookSchema)
调用步骤
1.获取model对象
const Book = mongoose.model('Book')
2.实例化model对象
let book = new Book({
  author: 'authorTest',
  name: 'zhangsan',
  publishTime: new Date()
})
3.保存实例化后的数据
book.save((err) => {
  if (err) {
    console.log('保存失败')
  } else {
    console.log('保存成功')
  }
})
4.使用model对象进行查询、修改和删除操作
Book.find({}, (err, docs) => { // 查询的结果是个数组【doc, doc, doc】
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

5. 查询条件
// or 条件，满足一个就可以
let condition = {
  $or: [
    {author: 'zhangsan'},
    {author: 'lisi'}
  ]
}
// and 条件，需要同时满足
let condition = {
  $and: [
    {author: 'zhangsan'},
    {author: 'lisi'}
  ]
}
项目组织,使用mongoose
1.config文件夹
  config.js 定义常量
  mongoose.js 连接数据库，引用定义好的model, 返回数据库实例
2.models
  定义各种model
3.app.js 使用数据库
  mongoose = require('./config/mongoose.js')
  const db = mongoose() // 这样一来，node启动之后就会连接数据库，创建对应的model
4.在路由中读取数据
  var mongoose = require('mongoose')
  var User = mongoose.model('User')

  router.get('/test', (req, res, next) => {
    var user = new User({
      auth: 'zhangsan',
      userName: 'lisi'
    })
    user.save((err) => { // 实例上的方法，保存这个实例
      if (err) {
        return next()
      }
      User.find({}, (err, docs) => { // 模型上的方法 查询所有的结果并返回
        res.json(docs)
      })

    })
  })
  默认值：
    固定值
    及时生成的值

 */