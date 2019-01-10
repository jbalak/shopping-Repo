const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()


router.get('/', function(req, res){
    res.send('party shoes')
})


module.exports = router