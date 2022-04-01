const {Sequelize} = require('sequelize')
const {dbHost,dbPassword,dbUser} = require('../../config/database')
const User = require('./models/User')
const Post = require('./models/Post')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/jwt`,{
    logging: false
})

const user = User(sequelize)
const post = Post(sequelize)

user.hasMany(post,{as:'post', foreignKey:'userId'})
post.belongsTo(user,{as:'author', foreignKey:'userId'})

module.exports= {sequelize,post,user}