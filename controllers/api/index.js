const router = require('express').Router();

const characterRoutes = require('./characterRoutes');

router.use('/', characterRoutes);

module.exports = router;