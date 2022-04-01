const express = require('express')
const router = express.Router()
//Middlevares
const auth= require('../middlewares/auth')

//controlles
const AuthContollers = require('../controllers/AuthContollers')
const PostContollers = require('../controllers/PostController')

router.get('/',(req,res)=>{
    res.send('hola muuuundo')
})
//login y registro
router.post('/api/signin',AuthContollers.signIn)
router.post('/api/signun',AuthContollers.signUp)

//post
router.get('/api/posts', auth, PostContollers.index)
router.post('/api/crearte', PostContollers.creste)


module.exports = router