'use strict'

const Product = require('../models/product')

async function getProduct(req, res){
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!product) return res.status(404).send({message: `El producto : ${productId} no existe`})
        res.status(200).send({product: product})
    })
}
async function getProducts(req, res){
    await Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!products) return res.status(404).send({message: 'No existen productos'})
        res.status(200).send({products: products})
    })
}

async function saveProduct(req, res, next){
    console.log("POST /Api/ Product")
    console.log(req.body)
    
    let product = new Product()
    product.name = req.body.name
    product.size = req.body.size
    product.unitaryPrice = req.body.unitaryPrice
    //product.imgUrl = req.file.originalname
   //console.log(req.file)
    product.description = req.body.description

    if (req.file) product.setImgUrl(req.file.originalname)
    await product.save((err,productStored) => {
        if (err) res.status(500).send({message: `Error al guardar en base de datos ${err}`})
        res.status(200).send({product: productStored})
    })
    
}
function updateProduct(req, res){
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar en base de datos ${err}`})
        if (!productUpdate) res.status(404).send({message: `El producto : ${productId} no existe`})
        res.status(200).send({product: productUpdate})
    })    
}
function deleteProduct(req, res){
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({message: `Error al borrar en base de datos ${err}`})
        if (!product) res.status(404).send({message: `El producto : ${productId} no existe`})
        product.remove( err => {
            if (err) res.status(500).send({message: `Error al borrar en base de datos ${err}`})
            else res.status(200).send({message: 'El producto ha sido eliminado'})
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}