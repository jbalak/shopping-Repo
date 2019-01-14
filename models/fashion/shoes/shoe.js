const mongoose = require('mongoose')
const shoeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    brand: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    color:[{
        type: String,
        required:true
    }],
    size:[{
        type: String,
        required:true
    }],
    ocasion:{
        type: String,
        required:true
    },
    ratings:{
        type:Number
    },
    stock:{
        type: String,
        required:true
    }
  
})
  
const Shoe = mongoose.model('shoe', shoeSchema)

module.exports = Shoe