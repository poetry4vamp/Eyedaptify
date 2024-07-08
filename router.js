const express = require("express");
const router = express.Router();
const { isAuthenticated, authenticatedUsers } = require('./authMiddleware');

const renderInvalidLink = (res) => {
    res.send("Invalid link!");
};

// router.get('/homepage', isAuthenticated, (req, res) => {
//     if (req.isAuthenticated) {
//         res.render('homepage');
//     } else {
//         renderInvalidLink(res);
//     }
// });

// router.get('/email', isAuthenticated, (req, res) => {
//     if (req.isAuthenticated) {
//         res.render('email');
//     } else {
//         renderInvalidLink(res);
//     }
// });

router.get('/welcomepage', (req, res) => {
    res.render('welcomepage');
});

router.get('/email', (req, res) => {
    res.render('email');
});

router.get('/homepage', (req, res) => {
    res.render('homepage');
});

module.exports = {
    router,
};
