const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const Cloth = require('../../../models/fashion/clothes/cloth')

router.get('/', async function(req, res){
    const cloth = await Cloth.find({'ocasion':'Party'})
    
    if(!cloth) return res.status.send('Given product is not available..')
    
    res.send(cloth)
})

router.get('/:id', async function(req, res){
    const cloth = await Cloth.findById(req.params.id)
    
    if(!cloth) return res.status.send('Given product is not available..')

    res.send(cloth)
})


router.put('/:id', async function(req, res){
    let cloth = await Cloth.findByIdAndUpdate(req.params.id, { brand: req.body.brand })

    if(!cloth) return res.status(404).send('Given product is not available..')

    res.send(cloth)
})


router.delete('/:id', async function(req, res){
    let cloth = await Cloth.findByIdAndRemove(req.params.id)

    if(!cloth) return res.status(404).send('Given product not available..')

    res.send(cloth)

})


module.exports = router