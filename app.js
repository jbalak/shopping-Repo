require('dotenv').config()
const passport = require('passport')
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
mongoose
  .connect('mongodb://localhost/Heady', { useNewUrlParser: true })
  .then(function () {
    console.log('Connected to db')
  })
  .catch(function (err) {
    console.error('Not connected to db')
  })

app.set('view engine', 'ejs')

app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
app.use('/', home)
app.use('/api/electronics/headphones', headphones)
app.use('/api/electronics/mobiles', mobiles)
app.use('/api/fashion/clothes/clothes', clothes)
app.use('/api/fashion/footware/shoes', shoes)
app.use('/api/add', add)

//listen to servet
const port = process.env.PORT || 9000
app.listen(port, function () {
  console.log(`Listening at ${port}`)
})
