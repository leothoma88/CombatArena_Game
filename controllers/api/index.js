const router = require('express').Router();

const characterRoutes = require('./characterRoutes');
//const monsterRoutes = require('./monsterRoutes')
router.use('/', characterRoutes);
//router.use('/', monsterRoutes);
module.exports = router;