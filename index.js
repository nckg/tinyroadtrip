var friendlyCron = require('friendly-cron');
var run = require('./lib/index');
var cron = require('node-cron');

var pattern = friendlyCron('every 4 hours');

cron.schedule(pattern, function(){
    run();
});