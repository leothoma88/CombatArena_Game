const router = require('express').Router();

const characterRoutes = require('./characterRoutes');
<<<<<<< HEAD
const monsterRoutes = require('./monsterRoutes')
router.use('characters/', characterRoutes);
router.use('monsters/', monsterRoutes);
=======
//const monsterRoutes = require('./monsterRoutes')
router.use('/', characterRoutes);
//router.use('/', monsterRoutes);
>>>>>>> 62fd4be819b9f6c53412b4b1a9f5eac0190d182f
module.exports = router;