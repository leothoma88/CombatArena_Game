const router = require('express').Router();
const { User } = require('../models');

//login i used from one of the MVC modules, not sure if it will be useful
//because i dont know how passport interacts with everything yet
// router.get('/login', (req, res) => {
//     if(req.session.logged_in) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

// module.exports = router;