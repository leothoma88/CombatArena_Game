require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('./config/passport-config.js');
const session = require('express-session');
const routes = require('./controllers');
const methodOverride = require('method-override');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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