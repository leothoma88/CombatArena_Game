const router = require('express').Router();

const characterRoutes = require('./characterRoutes');
const monsterRoutes = require('./monsterRoutes');
router.use('/characters', characterRoutes);
router.use('/monsters', monsterRoutes);
module.exports = router;