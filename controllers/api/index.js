const router = require('express').Router();
const characterRoutes = require('./characterRoutes');
const monsterRoutes = require('./monsterRoutes');

router.use('/Monsters', monsterRoutes);
router.use('./Characters', characterRoutes);