const {DataTypes} = require('sequelize')

module.exports = function (sequelize){
    return sequelize.define('post',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        body: {
            type:DataTypes.TEXT
        },


    },{
        timestamps:false
    })    
}    

