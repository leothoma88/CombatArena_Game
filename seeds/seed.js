const sequelize = require('../config/connection');
const { User } = require('../models');

const monsterData = require('./monsterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(monsterData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
