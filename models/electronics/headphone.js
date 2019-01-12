const brandSchema = require('../brand')
const mongoose = require('mongoose')
const headphoneSchema = new mongoose.Schema({
  title:{
      type : String
  },
    
  brand: {
      type:String
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref:'Brand'
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