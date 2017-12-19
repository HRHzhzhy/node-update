/**
 * type: mongoose.Schema.ObjectId
 * ref: 'Model Name'
 * 
 * Model.findOne().popular().exec((err, doc) => {
 * 
 * })

 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2017/dbname')

const User = new mongoose.Schema({
  address: String
})

