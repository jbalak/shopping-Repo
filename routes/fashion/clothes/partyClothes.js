const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const Cloth = require('../../../models/fashion/clothes/cloth')

router.get('/', async function(req, res){
    const cloth = await Cloth.find({'ocasion':'Party'})
    res.send(cloth)
})

router.get('/:id', async function(req, res){
    const cloth = await Cloth.findById(req.params.id)
    res.send(cloth)
})


module.exports = router