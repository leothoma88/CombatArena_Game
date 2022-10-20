const sequelize = require('../config/connection');
const { User } = require('../models');
const { Monsters } = require('../models');
const { Characters } = require('../models');
const monsterData = require('./monsterData.json');
const characterData = require('./characterData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Monsters.bulkCreate(monsterData, {
    individualHooks: true,
    returning: true,
  });

  await Characters.bulkCreate(characterData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();