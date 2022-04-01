const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const {user, posts} = require('../database/db')
const authConfig = require('../../config/database')


module.exports={
    //login
    signIn(req,res){
        let {email,password}= req.body
        user.findOne({
            where:{
                email: email
            }
        }).then(user=>{
            if(!user){
                res.status(404).json({msg: 'Usuario no encontrado'})
            }else{
                if(bcrypt.compareSync(password, user.password)){
                    //devolvemos token
                    let token = jwt.sign({user:user},authConfig.secret, {
                        expiresIn: authConfig.expires
                    })
                    res.json({
                        user: user,
                        token:token
                    })
                }else{
                    res.status(401).json({msg:'Contreaseña incorrecta'})
                }
            }
        }).catch(err=>{
            res.status(500).json(err)
        })
    },
    //registro
    signUp(req,res){
        //crear un usuario
        const {name, email,password, post}=req.body
        let incrp = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds))
        user.create({
            name: name,
            email: email,
            password: incrp,
        }).then(user=>{
            let token= jwt.sign({user:user}, authConfig.secret,{
                expiresIn: authConfig.expires
            })
            res.json({
                user: user,
                token:token
            })
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
}

