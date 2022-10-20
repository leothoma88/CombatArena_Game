const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const initializePassport = require('../config/passport-config');
const db = require('../models');

initializePassport(
  passport,
  async (email) => {
    const user = await db.Users.findOne({where: {email: email}})
    return user;
  },
  async (id) => {
    const user = await db.Users.findOne({where: {id: id}})
    return user;
  }
);

router.get('/', checkAuthenticated, (req, res) => {
  res.render('index.handlebars', { name: req.user.name });
});

router.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.handlebars');
});

router.post(
  '/login',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  
  })
);

router.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.handlebars');
});

//bcrypt hashpassword from register post
router.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const userData = await db.Users.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });
    console.log(userData);
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

router.get('/dialogue', checkAuthenticated, (req, res) => {
  res.render('dialoguepage.handlebars');
});

router.get('/combat', checkAuthenticated, (req, res) => {
  res.render('combat.handlebars');
});

//Ends session
router.get('/logout', (req, res, next) => {
  req.logOut((err) => {
    if(err) {
      return next(err);
    }
  req.session = null;
  res.redirect('/login');
  });
});

//protect home route from not logged in users
function checkAuthenticated(req, res, next) {
  console.log('req.isAuthenticated:', req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

//prevent already logged in user from logging in
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

module.exports = router;