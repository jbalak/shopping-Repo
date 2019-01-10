const mongoose = require('mongoose')
const headphoneSchema = new mongoose.Schema({
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

const Headphone = mongoose.model('headphone', headphoneSchema)

module.exports = Headphone