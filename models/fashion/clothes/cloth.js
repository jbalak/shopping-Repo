const mongoose = require('mongoose')
const clothSchema = new mongoose.Schema({
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
    },
    stock:{
        type:Number
    }
  
})
  
const Cloth = mongoose.model('Cloth', clothSchema)

module.exports = Cloth