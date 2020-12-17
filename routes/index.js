var express = require('express');
var router = express.Router();

var db = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: "Create your countdown"});
});

/* POST home page. */
router.post('/', async function (req, res, next) {
    try {
        _id = await db.createCountdown({
            date: req.body.date,
            title: req.body.title,
            description: req.body.description
        });
    } catch (e) {
        next(createError(404));
    }
    res.redirect("/c/" + _id)
});

module.exports = router;