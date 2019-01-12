const mongoose = require('mongoose')
const brandSchema = new mongoose.Schema({
    name:String,
    products:[String],

})

const Brand = mongoose.model('Brand', brandSchema)

module.exports = brandSchema