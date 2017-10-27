const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('access Token:', accessToken);
    console.log('refresh Token:', refreshToken);
    console.log('profile:', profile);
  })
);

// app.get('/',(req, res) => {
//   res.send({'message': 'This project is still on-going >_<'});
// });

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);

const PORT = process.env.PORT || 5000; //using heroku or localhost
app.listen(PORT);

//http://localhost:5000/
