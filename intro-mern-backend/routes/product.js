'use strict'

const express = require('express')
const productController = require('../controllers/productController')
const upload = require('../libs/storage')
/*var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});
*/
const api = express.Router()

api.get("/products",productController.getProducts)
api.post("/products",upload.single('imgUrl'),productController.saveProduct)

/*
api.post("/products",upload.single('imgUrl'),addProduct)

function addProduct(req,res,next){
    //res.status(201).send({"succes":true})
    const body = req.body;
    //res.json({fileName: req.file.filename});
    res.body;
    res.end();
}
api.post("/products",addProduct)
*/
module.exports = api