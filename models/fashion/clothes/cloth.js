const mongoose = require('mongoose')
const clothSchema = new mongoose.Schema({
    title:{
        type: String,
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
    color:{
        type: String
    },
    size:
    [{
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
        type:Number,
        required:true
    }
  
})
  
const Cloth = mongoose.model('Cloth', clothSchema)

module.exports = Cloth