const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

// VARIABLES GLOBALES
require('dotenv').config();

// CONEXIÓN A MYSQL
const mysqlconn = require('./database/database')
mysqlconn.sync().then(()=>{
    console.log("MySQL => Status 200")
}).catch((error)=>{
    console.log(error)
});

// MIDLEWARES
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// RUTAS
app.use("/",require('./routes/routes'))

// SERVIDOR
app.listen(process.env.PORT, ()=>{
    console.log("ON PROCCESS PORT " + process.env.PORT)
})