var express = require('express');
var shajs = require('sha.js')
var moment = require('moment')

var Countdown = require('../db');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

/* POST home page. */
router.post('/', function (req, res, next) {
    var date = moment(req.body.date, "DD/MM/YYYY").toDate();
    //let hash = shajs('sha256').update(date.getTime(), +req.body.color + req.body.title + req.body.description).digest('hex');
    let countd = new Countdown({
        //id: hash,
        date: date,
        background: req.body.color,
        title: req.body.title,
        description: req.body.description
    });

    var query = {
        id: countd._id
    };

    Countdown.findOne(query, function (error, result) {
        if (!error) {
            if (!result) {
                countd.save(function (err) {
                    if (err) return console.log(err);
                    res.redirect("/countdown/"+countd._id)
                });
                
            }
            else
            {
                res.render('index', {status: "Already exist"});
            }
        }
    });
});
module.exports = router;