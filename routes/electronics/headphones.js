const express = require('express')
const router = express.Router()
const Headphone = require('../../models/electronics/headphone')

router.get('/',async function(req, res){
    const headphones = await Headphone.find()
    res.send(headphones)
})

router.get('/:id',async function(req, res){
    const headphones = await Headphone.findById(req.params.id)
    res.send(headphones)
})


module.exports = router