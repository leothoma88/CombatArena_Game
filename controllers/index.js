const router = require('express').Router();

const passportRoutes = require('./passport-routes');

router.use('/', passportRoutes);

module.exports = router;
