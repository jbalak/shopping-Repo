const passport = require('../../config/passport')
const express = require('express')
const router = express.Router()
const Mobiles = require('../../models/electronics/mobile')

router.get('/',
    passport.authenticate('jwt', { session: false }),
    async function (req, res) {
        const mobiles = await Mobiles.find()

        if (!mobiles) return res.status(404).send('Given product not available..')

        return res.json({
            mobiles,
            payload: req.user
        })
    })

router.get('/:id', async function (req, res) {
    const mobiles = await Mobiles.findById(req.params.id)

    if (!mobiles) return res.status(404).send('Given product not available..')

    res.send(mobiles)
})

module.exports = router