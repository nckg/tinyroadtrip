#!/usr/bin/env node
var run = require('./lib/index');
var cron = require('node-cron');

cron.schedule('0 0 */5 * *', function () {
    run();
});