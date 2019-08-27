const mongoose = require('mongoose')

mongoose.connection.on('open',()=> console.log("Conectado a Mongooaaassssaaaoooo"))
async function connectDB(host, port, dbName){
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri,{useNewUrlParser: true})
}

module.exports = connectDB