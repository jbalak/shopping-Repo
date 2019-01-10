const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()


router.get('/', function(req, res){
    res.send('casual clothes')
})


module.exports = router