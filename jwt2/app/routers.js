const express = require('express')
const router = express.Router()
const AuthContollers = require('./controllers/AuthControllers')

router.get('/',(req,res)=>{
    res.json({hola:'mundo'})
})

router.post('/api/signin',AuthContollers.signIn)
router.post('/api/signun',AuthContollers.signUp)


module.exports = router