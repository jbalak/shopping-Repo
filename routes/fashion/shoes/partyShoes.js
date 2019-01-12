const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const Shoes = require('../../../models/fashion/shoes/shoe')

router.get('/', async function(req, res){
    const shoes = await Shoes.find({'ocasion':'Party'})
    
    if(! shoes) return res.status(404).send('Given product is not available..')
    
    res.send(shoes)
})

router.get('/:id', async function(req, res){
    const shoes = await Shoes.findById(req.params.id)
    if(!shoes) return res.status(404).send('Given product is not available..')
    
    res.send(shoes)
})



module.exports = router