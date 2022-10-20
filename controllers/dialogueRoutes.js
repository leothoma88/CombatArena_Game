const router = require('express').Router();
router.get('/dialogue', (req, res) => {
    res.render('dialoguepage.handlebars', {title: dialogue

    });
  });

module.exports = router;