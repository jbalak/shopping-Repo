const Headphone = require('../../models/electronics/headphone')
const Mobile = require('../../models/electronics/mobile') 
const Cloth = require('../../models/fashion/clothes/cloth')
const Shoe = require('../../models/fashion/shoes/shoe')
const express = require('express')
const router = express.Router()


router.get('/headphones', async function (req, res) {
    let headphone = new Headphone({
        title : req.body.title,
        brand : req.body.brand,
        model : req.body.model,
        price : req.body.price,
        color : req.body.color,
        stock : req.body.stock

    })
    await headphone.save()
})


router.get('/mobiles', async function (req, res) {
    let mobile = new Mobile({
        title : req.body.title,
        brand : req.body.brand,
        model : req.body.model,
        price : req.body.price,
        color : req.body.color,
        stock : req.body.stock

    })
    await mobile.save()
})



router.get('/clothes', async function (req, res) {
    let clothes = new Cloth({
        title : req.body.title,
        brand : req.body.brand,
        price : req.body.price,
        color : req.body.color,
        size: req.body.size,
        ocasion: req.body.ocasion,
        rating: req.body.rating, 
        stock : req.body.stock

    })
    await clothes.save()
})



router.get('/shoes', async function (req, res) {
    let shoe = new Shoe({
        title : req.body.title,
        brand : req.body.brand,
        price : req.body.price,
        color : req.body.color,
        size: req.body.size,
        ocasion: req.body.ocasion,
        rating: req.body.rating, 
        stock : req.body.stock

    })
    await clothes.save()
})

module.exports = router