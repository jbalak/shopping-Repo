const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const Shoes = require('../../../models/fashion/shoes/shoe')

router.get('/', async function(req, res){
    const shoes = await Shoes.find({'ocasion':'Party'})
    res.send(shoes)
})

router.get('/:id', async function(req, res){
    const shoes = await Shoes.findById(req.params.id)
    res.send(shoes)
})

module.exports = router