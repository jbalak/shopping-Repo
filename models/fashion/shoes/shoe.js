const mongoose = require('mongoose')
const shoeSchema = new mongoose.Schema({
    brand: {
        type: String
    },
    price: {
        type: Number
    },
    color:{
        type: String
    },
    size:
    {
        type: String
    },
    ocasion:{
        type: String
    },
    ratings:{
        type:Number
    }
  
})
  
const Shoe = mongoose.model('shoe', shoeSchema)

module.exports = Shoe