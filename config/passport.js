const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');



module.exports = function(passport){
    passport.use(
        new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            // Heroku will try to load app with HTTPS, and an error will be thrown if proxy is not present
            proxy: true
        }, (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(profile);
        })
    )
}