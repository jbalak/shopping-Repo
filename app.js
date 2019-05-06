require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const headphones = require('./routes/electronics/headphones')
const mobiles = require('./routes/electronics/mobiles')
const clothes = require('./routes/fashion/clothes/clothes')
const shoes = require('./routes/fashion/footware/shoes')
const home = require('./routes/home')
const add = require('./routes/AddProducts/addProducts')
const signup = require('./routes/users/signup')
const passport = require('passport')

//connect to db
mongoose.connect('mongodb://localhost/Heady', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to db')
    })
    .catch(function (err) {
        console.error('Not connected to db')
    })
mongoose.connection.collection('user').insertOne({ email: "abc@gmail.com" }, () => { })


app.set('view engine', 'ejs')
app.use(passport.initialize())
app.use(express.json())
app.use('/', home)
app.use('/electronics/headphones', headphones)
app.use('/electronics/mobiles', mobiles)
app.use('/fashion/clothes/clothes', clothes)
app.use('/fashion/footware/shoes', shoes)
app.use('/add', add)
app.use('/user/signup', signup)

const port = process.env.PORT
//listen to servet
app.listen(port, () => {
    console.log(`Listening at ${port}`)
})