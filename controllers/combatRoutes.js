const router = require('express').Router();

router.get('/combat', (req, res) => {
    res.render('combat.handlebars');
  });

module.exports = router;