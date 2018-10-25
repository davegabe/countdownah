const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.db_username + ':' + process.env.db_password + '@ds237363.mlab.com:37363/countdown',{ useNewUrlParser: true });

const Countdown = mongoose.model('Countdown', {
    id: String,
    date: Date,
    background: String,
    title: String,
    description: String
});


module.exports = Countdown;