const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Characters extends Model {}

Characters.init(
    {
        id: {
            allowNull:false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        hitpoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'character',
    }
);

module.exports = Characters;