const express = require('express')
const app = express()
const Mobile = require('../models/electronics/mobile')
app.get('/', function(req, res){
    res.render('home')
})

app.post('/add', function(req, res){
    var data ={
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        color: req.body.color,
        available: req.body.available
    }
    const mobile = new Mobile(data)
    mobile.save()
    
})

module.exports = app