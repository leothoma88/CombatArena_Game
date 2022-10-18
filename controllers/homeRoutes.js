const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');

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
    const hashedPass = bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.email,
      email: req.body.email,
      password: hashedPass,
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
  console.log(users)
});

//Ends session
router.delete('/logout', (req, res, next) => {
  req.logOut((err) => {
    if(err) {
      return next(err);
    }
  res.redirect('/login');
  });
});

//protect home route from not logged in users
function checkAuthenticated(req, res, next) {
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
