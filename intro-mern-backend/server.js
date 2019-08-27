//Para usar las variables de entorno
const dotenv = require('dotenv')
dotenv.config()
//require('dotenv').config()  (equivalente a las lineas anteriores)
const config = require('./config.js') // fichero de configuracion
const app = require('./app')  //servidor de express
const connectDB = require('./db/mongodb')

//const app = express()
//const port = 8080
const port = config.APP_PORT

async function initApp(config){
    try {
        await connectDB(config.DB_HOST,config.DB_PORT,config.DB_NAME)
        app.listen(port, () => { console.log(`Listen en puerto: ${port}`)})       
    } catch (e) {
        console.log(e)
        process.exit(0)    //mata el proceso de node
    }
}
initApp(config)