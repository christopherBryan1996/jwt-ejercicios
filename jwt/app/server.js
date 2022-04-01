const express = require('express')
const app = express()
const corn = require('cors')
const morgan = require('morgan')
const router =require('./Routes/routes')
const {sequelize} = require('./database/db')
//data los estados 
app.use(morgan('dev'))
//cualquier pagina podra hacer peticiones
app.use(corn(
    origin='*'
))
//para recibir desde el body
app.use(express.json())
//para detectar objetos como cadenas o matrices 
app.use(express.urlencoded({extended:false}))
//rutas
app.use(router)

app.listen(3002,()=>{
    console.log('I listen on port 3002')
    sequelize.authenticate().then(()=>console.log('conectado a la base de datos '))
    sequelize.sync({force:false}).then(()=>console.log('creada las tablas ')).catch(e=>console.log(e))
})