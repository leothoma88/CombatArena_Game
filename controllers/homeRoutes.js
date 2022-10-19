const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const initializePassport = require('../config/passport-config');
const db = require('../models');

initializePassport(
  passport,
  (email) => db.Users.find((user) => user.email === email),
  (id) => db.Users.find((user) => user.id === id)
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
    db.Users.create({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
  console.log(db.Users);
});

//Ends session
router.delete('/logout', (req, res, next) => {
  req.logOut((err) => {
    if(err){
      return next(err);
    }
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