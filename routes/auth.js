const express = require('express');
const router = express.Router();
const passport = require('passport');

// routes to "auth/google" because it's in the auth.js file
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
        res.redirect('/dashboard');
    });

module.exports = router;