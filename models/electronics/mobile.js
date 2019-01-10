const mongoose = require('mongoose')
const mobileSchema = new mongoose.Schema({
  brand: {
      type: String
  },
  model:{
      type: String
  },
  price: {
      type: Number
  },
  color:{
      type: String
  },
  available:
  {
      type: Boolean
  }
})

const Mobile = mongoose.model('Mobile', mobileSchema)

module.exports = Mobile