const express = require('express')
const router = express.Router()
const Mobiles = require('../../models/electronics/mobile')

router.get('/',async function(req, res){
    const mobiles = await Mobiles.find()
    res.send(mobiles)
})

router.get('/:id', async function(req, res){
    const mobiles = await Mobiles.findById(req.params.id)
    res.send(mobiles)
})

module.exports = router