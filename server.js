const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('./controllers/home-routes.js');
const session = require('express-session');
const methodOverride = require('method-override');

initializePassport(
    passport,
     email => users.find(user => user.email === email),
     id => users.find(user => user.id === id)
);

const app = express();
const PORT = process.env.PORT || 3000;

const users = [];
const hbs = exphbs.create({});

app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

