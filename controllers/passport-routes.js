const router = require('express').Router();
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false);
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done (null, false);
            }
        } catch (e) {
            return done(e);
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'},
    authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    })
}

module.exports = initialize;

router.get('/', checkAuthenticated, (req, res) => {
    res.render('index.js', {name: req.user.name })
})

router.get('/login', checkNotAuthenticated,  (req, res) => {
    res.render('login.handlebars')
})

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.handlebars')
})

//bcrypt hashpassword from register post
router.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPass = bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.email,
            email: req.body.email,
            password: hashedPass
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

//Ends session
router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })

  //uses
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
  }

  // uses passport is authenticated
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
  }