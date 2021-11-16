const express = require('express');
const app = express() ;
const path = require('path')

//set middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//setting view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')

//import route
const indexRoute = require('./routes/index')

app.use('/index', indexRoute)

const PORT = process.env.PORT || 8080 ;
app.listen(PORT, ()=>console.log(`Server is running on Port : ${PORT}`))