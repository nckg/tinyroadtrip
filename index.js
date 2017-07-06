var friendlyCron = require('friendly-cron');
var run = require('./lib/index');
var cron = require('node-cron');

var pattern = friendlyCron('every 4 hours');

const go = () => {
    cron.schedule(pattern, function(){
        run();
    });
}

module.exports = (req, res) => {
    go();
    res.end('Welcome to Micro')
}