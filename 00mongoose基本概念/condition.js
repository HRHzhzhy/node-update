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