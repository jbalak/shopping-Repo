const express = require('express')
const app = express()
const mongoose = require('mongoose')
const headphones = require('./routes/electronics/headphones')
const mobiles = require('./routes/electronics/mobiles')
const clothes = require('./routes/fashion/clothes/clothes')
const shoes = require('./routes/fashion/footware/shoes')
const home = require('./routes/home')
const add = require('./routes/Add Products/addProducts')


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
app.use('/fashion/clothes/clothes', clothes)
app.use('/fashion/footware/shoes', shoes)
app.use('/add',add)


//listen to servet
app.listen(process.env.PORT || 9000, function(){
    console.log(`Listening...`)
})