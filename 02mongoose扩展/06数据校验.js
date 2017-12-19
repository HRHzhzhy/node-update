/**
验证器：
1.所有模型都有的，require，验证非空
数字特有的
max:
min:
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2017/dbname')

const OrderSchema = new mongoose.Schema({
  name: String,
  count: {
    type: Number,
    required: true,
    max: 100,
    min: 10
  },
  status: {
    type: String,
    // 枚举验证器，所有的值必须是下面的几个选项
    enum: ['created', 'success', 'failed']
  },
  desc: {
    type: String,
    // 正则验证
    match: /book/g,
    // 自定义的验证器
    validate: function (desc) {
      return desc.length >= 10
    }
  },
  isBn: Number
})
let Order = mongoose.model('Order', OrderSchema)

let order = new Order()
order.count = 9
order.status = 'new'
order.desc = 'this is an order'
order.save((err) => {
  if (err) {
    console.log('save failed:', err)
    // Order validation failed: count: Path `count` (9) is less than minimum allowed value (10)., status: `new` is not a valid enum value for path `status`., desc: Path `desc` is invalid (this is an order)
  } else {
    console.log('save success')
  }
})