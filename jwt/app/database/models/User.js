const {DataTypes} = require('sequelize')

module.exports= function(sequelize){
  return sequelize.define('user',{
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlpha:{
          msg:'el nombre solo puede tener letras'
        },
        len:{
          args:[2, 255],
          msg:'el nombre tiene que ser minimo de dos caracteres'
        }
      }
    },
    password:{ 
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        len:{
          args: [6, 255],
          msg: 'la contraseña tiene que tener como minimo 6 caracters'
        }
      }
    },
    email:{ 
      type: DataTypes.STRING,
      allowNull:false,
      unique: {
        args:true,
        msg:'ya esta registrado'
      },
      validate:{
        isEmail:{
          msg:'El email tiene que ser un correo valido'
        }
      }
    }
  },{
    timestamps:false
  })
}



