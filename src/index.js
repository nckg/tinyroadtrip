import cargen from './cargen';
import Twitter from 'twitter';
import dotenv from 'dotenv';

dotenv.config();

function run () {
    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_SECRET
    });

    client.post('statuses/update', {status: cargen()});
}

module.exports = run;
