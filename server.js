if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('./config/passport-config');
const session = require('express-session');
const methodOverride = require('method-override');
const sequelize = require('./config/connection');

initializePassport(
    passport,
     email => users.find(user => user.email === email),
     id => users.find(user => user.id === id)
);

const app = express();
const PORT = process.env.PORT || 3001;

const users = [];
const hbs = exphbs.create({});

app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.js', {name: req.user.name })
})

app.get('/login', checkNotAuthenticated,  (req, res) => {
    res.render('login.handlebars')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.handlebars')
})

//bcrypt hashpassword from register post
app.post('/register', checkNotAuthenticated, async (req, res) => {
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

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

  //Ends session
  app.delete('/logout', (req, res) => {
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

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
  }