const express = require('express')
const app = express()
const bodyParser = require('body-parser')
/**
 * 1.省略路径，表示所有的请求都会使用这个中间件
 * 2.bodyParser.json()中间件作用
 *  1.如果请求方式是post
 *  2.如果body中带有数据
 *  3.会把body中的数据解析成对应的格式content-type【json\query string\form】,保存到req.body上
 */
// content-type
// json类型的body
app.use(bodyParser.json())
// query string 类型的body
app.use(bodyParser.urlencoded())
app.listen(8888, () => {
  console.log('listening 8888')
})