const mongoose = require('mongoose')
const { Schema } = mongoose

const AdminSchema = new Schema({
  name: String,
  passport: String
})

const Admin = mongoose.model('admin', AdminSchema, 'admin')

module.exports = Admin