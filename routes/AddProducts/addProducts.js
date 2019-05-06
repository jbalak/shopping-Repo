const Headphone = require('../../models/electronics/headphone')
const Mobile = require('../../models/electronics/mobile')
const Cloth = require('../../models/fashion/clothes/cloth')
const Shoe = require('../../models/fashion/shoes/shoe')
const express = require('express')
const router = express.Router()

router.post('/headphones', async function(req, res) {
  let headphone = new Headphone({
    title: req.body.title,
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    color: req.body.color,
    stock: req.body.stock
  })
  let result = await headphone.save()
  res.send(result)
})

router.post('/mobiles', async function(req, res) {
  const phone = await Mobile.find({ title: req.body.title })
  console.log(phone)
  if (!phone[0] || phone[0].title !== req.body.title) {
    let mobile = new Mobile({
      title: req.body.title,
      brand: req.body.brand,
      model: req.body.model,
      price: req.body.price,
      color: req.body.color,
      stock: req.body.stock
    })

    let result = await mobile.save()
    return res.send(result)
  }
  return res.send('This product already added ')
})

router.post('/clothes', async function(req, res) {
  let clothes = new Cloth({
    title: req.body.title,
    brand: req.body.brand,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    ocasion: req.body.ocasion,
    rating: req.body.rating,
    stock: req.body.stock
  })
  let result = await clothes.save()
  res.send(result)
})

router.post('/shoes', async function(req, res) {
  let shoe = new Shoe({
    title: req.body.title,
    brand: req.body.brand,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    ocasion: req.body.ocasion,
    rating: req.body.rating,
    stock: req.body.stock
  })
  let result = await clothes.save()
  res.send(result)
})

module.exports = router
