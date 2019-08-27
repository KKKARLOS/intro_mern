'user strict'
const mongoose = require('mongoose')
const config = require('../config.js') // fichero de configuracion
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    size: { type: Number, default: 0 },
    unitaryPrice: { type: Number, default: 0 },
    imgUrl: String,
    description: String
},{
    timestamps:true     //por defecto crea dos propiedades más createddate, updatedate
})

ProductSchema.methods.setImgUrl = function setImgUrl(filename){
    this.imgUrl=`${config.APP_HOST}:${config.APP_PORT}/storage/imgs/${filename}`
}
module.exports = mongoose.model('Product', ProductSchema)