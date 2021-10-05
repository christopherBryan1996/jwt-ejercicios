const express = require('express')
const app = express()
const corn = require('cors')
const morgan = require('morgan')
const router =require('./routes')
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

app.listen(3000,()=>{
    console.log('I listen on port 300')
})