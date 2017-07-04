'use strict';

var _cargen = require('./cargen');

var _cargen2 = _interopRequireDefault(_cargen);

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var client = new _twitter2.default({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

client.post('statuses/update', { status: (0, _cargen2.default)() });