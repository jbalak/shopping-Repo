const brandSchema = require('../brand')
const mongoose = require('mongoose')
const headphoneSchema = new mongoose.Schema({
  title:{
      type : String,
      required :true
  },
    
  brand: {
      type:String,
      required:true
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref:'Brand'
  },
  
  price: {
      type: Number,
      required:true
  },
  
  color: [
    { 
        type: String 
    }
  ],
  
  stock:
  {
      type: Number,
      required:true
  }
})

const Headphone = mongoose.model('headphone', headphoneSchema)

module.exports = Headphone