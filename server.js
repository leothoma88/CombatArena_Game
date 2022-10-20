// imports
require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());

//tells application to allow us to access the form in our request variable in our post method
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now Running'));
});