const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Monsters extends Model {}

Monsters.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    monsterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'monster',
  }
);

module.exports = Monsters;