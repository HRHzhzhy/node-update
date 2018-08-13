const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const model = require('./00scheme')
const uri = 'mongodb://localhost/test'
mongoose.connect(uri, {useMongoClient:true}) // 连接数据库
// 添加
const add = () => {
  return new Promise((resolve, reject) => {
    let initUser = {
      openId: 'openidNewNew11111113333333',
      current: {
        hsk: 'hsk-1-1',
        translate: 'translate'
      },
      expire: {
        course: 'hsk'
      }
    }
    let userEntity = new model.RobotUser(initUser)
    userEntity.save((err) => {
      if (err) {
       reject(err)
      } else {
       resolve(initUser)
      }
    })
  })
}
// add().then((data) => {
//   console.log(data)
// }, err => {
//   console.log(err)
// })
const addNew = async () => {
  try {
    let result = await add()
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  // let result = await add()
  // console.log(result)
}
// addNew()

// 查找
const find = (query = {}) => {
  return new Promise((resolve, reject) => {
    model.RobotUser.find(query, (err, docs) => {
      if (err) {
        reject(err)
      }
      resolve(docs)
    })
  })
}
// 查找并更新
const findOneItem = async () => {
  let result = await find({openId: 'openidNewNew'})
  let course = 'hsk'
  result[0].failed[course].push({name: 222})
  console.log(JSON.stringify(result[0].failed[course]))
  result[0].wrongTimes = 1
  result[0].current[course] = 'hsk-1-2'
  result[0].save((err) => {
    if(err) {
      console.log(err)
    }
    console.log(JSON.stringify(result))
  })
  // console.log(JSON.stringify(result))
}
// findOneItem()
