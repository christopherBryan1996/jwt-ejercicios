const jwt = require('jsonwebtoken')
const authConfig = require('../../config/database')

module.exports= (req,res,next)=>{
    //console.log(req.headers)
    //comprobar que exista autorizacion
    if(!req.headers.authorization){
        res.status(401).json({mgs:'Acceso no autorizado'})
    }else{
        let token =req.headers.authorization.split(' ')[1]
        //console.log(token)
        
        //cpmprobar la valides de este token
        jwt.verify(token, authConfig.secret,(err,decoded)=>{
            if(err) {
                res.status(500).json({msg:'Ha ocurrido un problema al decodificar el token', err})
            }else {
                //console.log(decoded)//nos muestra de que usuario es el toquen
                req.user = decoded
                next()
            }
        })
        
    }
    
}