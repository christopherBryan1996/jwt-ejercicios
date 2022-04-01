const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routers')
const  {sequelize}  = require('./models/index')

app.use(morgan('dev'))
app.use(cors(
    origin='*'
))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(router)

app.listen(3002,()=>{
    console.log('i listen http://localhost:3002')
    sequelize.authenticate().then(()=>console.log('dentro'))
    //sequelize.sync({force:true})
})