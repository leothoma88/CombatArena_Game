const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Characters = require('./Characters');

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //validate
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'user',
  }
);
module.exports = Users;