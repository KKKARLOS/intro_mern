//ponemos la funcionalidad de express
'use strict'
const express = require('express')
const bodyParser = require('body-parser')
//const hbs = require('express-handlebars')
const productRoutes = require('./routes/product')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//app.use(bodyParser.urlencoded({extended:false}))
//app.use(bodyParser.json({limit: '5mb'}));
//app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
/*
app.use(function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
  })
*/
app.use('public',express.static(`${__dirname}/storage/imgs`))

/*app.engine('.hbs',hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine','.hbs')
app.get("/login",(req,res)=>{
    res.render('login')
})

app.use("/api",api)*/
app.use("/api",productRoutes)

module.exports = app