const express = require('express')
const app = express()
const Shoe = require('../models/fashion/shoes/shoe')
app.get('/', function(req, res){
    res.render('home')
})

app.post('/add', function(req, res){
    var data ={
        brand: req.body.brand,
        price: req.body.price,
        color: req.body.color,
        size:req.body.size,
        ocasion: req.body.ocasion,
        rating:req.body.rating,
        stock: req.body.stock
    }
    const shoe = new Shoe(data)
    shoe.save()
    
})

module.exports = app