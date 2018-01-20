const express = require('express');
const router = express.Router();
const passport = require('passport');

// routes to "auth/google" because it's in the auth.js file
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
        res.redirect('/dashboard');
    });

router.get('/verify', (req, res) =>{
    if(req.user){
        console.log(req.user);
    } else {
        console.log('Not Authorized');
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;