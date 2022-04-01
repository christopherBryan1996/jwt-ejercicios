'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany
    }
  };
  user.init({
    name:{ 
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlpha:{
          msg:'el nombre solo puede tener letras'
        },
        len:{
          args:[2, 255],
          msg: 'El nombre tiene que ser minimo de dos caracteres'
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
    },
  }, {
    sequelize,
    modelName: 'user',
  },{
    tableName:'users'
  });
  return user;
};