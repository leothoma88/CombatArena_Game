const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Characters = require('./Characters');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            //validate 
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'user',
    }
);
module.exports = User;