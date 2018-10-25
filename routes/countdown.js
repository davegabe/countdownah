var express = require('express');

var router = express.Router();

var Countdown = require('../db');

/* GET home page. */
router.use('/:id', function (req, res, next) {
    try{
    Countdown.findOne({_id: req.params.id}, function (err, c) {
        if (err) return console.log(err);
        if (c != null)
            res.render('countdown', {title: c.title, description: c.description, date: c.date.getTime(), color:c.background});
        else
            res.render('error');
    });}
    catch(e){
    console.log(e)}
});

module.exports = router;