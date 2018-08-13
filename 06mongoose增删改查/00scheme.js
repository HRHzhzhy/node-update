const mongoose = require('mongoose')
const robotUserSchema = mongoose.Schema({
  openId: { type: String, index: true, required: true },
  current: {
    hsk: { type: String, default: 'hsk-1-1' }, // hsk-1-1
    translate: { type: String, default: 'translate' }
  },
  expire: {
    course: { type: String, default: 'translate' }, // hsk, translate
    time: { type: Number, default: (new Date()).getTime() }
  },
  wrongTimes: { type: Number, default: 0 },
  done: {
    hsk: { type: Boolean, default: false }
  },
  finished: {
    hsk: [String]
  },
  failed: {
    hsk: [{ name: { type: String }, errtime: { type: Number, default: (new Date()).getTime() } }]
  }
  // hskDone: { type: Boolean, default: false },
  // hskFinished: [ String ],
  // hskFailed: [{ hsk: { type: String }, errtime: { type: Number, default: (new Date()).getTime() } }]
})
exports.RobotUser = mongoose.model('RobotUser', robotUserSchema)