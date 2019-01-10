const express = require('express')
const app = express()
const mongoose = require('mongoose')
const headphones = require('./routes/electronics/headphones')
const mobiles = require('./routes/electronics/mobiles')
const casualClothes = require('./routes/fashion/clothes/casualClothes')
const partyClothes = require('./routes/fashion/clothes/partyClothes')
const casualShoes = require('./routes/fashion/shoes/casualShoes')
const partyShoes = require('./routes/fashion/shoes/partyShoes')
const home = require('./routes/home')
const add = require('./routes/home')


//connect to db
mongoose.connect('mongodb://localhost/Heady', { useNewUrlParser: true })
.then(function(){
    console.log('Connected to db')
})
.catch(function(err){
    console.error('Not connected to db')
})

app.set('view engine', 'ejs')

app.use(express.json())
app.use('/', home)
app.use('/electronics/headphones', headphones)
app.use('/electronics/mobiles',mobiles)
app.use('/fashion/clothes/casual', casualClothes)
app.use('/fashion/clothes/party', partyClothes)
app.use('/fashion/shoes/casual', casualShoes)
app.use('/fashion/shoes/party', partyShoes)
app.use('/add',add)




//listen to servet
app.listen(process.env.PORT || 9000, function(){
    console.log(`Listening...`)
})