const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dialogueRoutes = require('./dialogueRoutes');
const combatRoutes = require('./combatRoutes');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dialogue', dialogueRoutes);
router.use('/combat', combatRoutes)
module.exports = router;