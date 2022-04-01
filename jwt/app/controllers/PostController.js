const {post} = require('../database/db')

module.exports = {
    async index(req,res){
        let posts = await post.findAll();
        res.json(posts)
    },

    creste(req,res){
        const {title,body,userId}= req.body
        post.create({
            title: title,
            body: body,
            userId:userId
        }).then((post)=>{
            res.json(post)
        }).catch(e=> console.error('error de creacion'))
    }
}