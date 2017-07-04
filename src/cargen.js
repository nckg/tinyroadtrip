import randomInt from 'random-int';
import randomItem from 'random-item';

const CAR = ["🚗"];
const TRAFFIC = ["🚕", "🚙", "🚌", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜"];
const SKY = ["🌕", "☀", "️🌤"];
const SEA = ["🌊"];

const TILESETS = {
    'desert': ["🌵","🌵","🌵","🌵","🌵","🌵","🌴","🌴","🐪","🐢","🐎"],
    'forest': ["🌲","🌲","🌲","🌲","🌲","🌲","🌲","🐇","🌳","🌳"],
    'beach': ["🌴","🌴","🌴","🌴","🍍","🐢","🗿","🐚"],
    'field': ["🌾","🌾","🌾","🌻","🐍","🐈"],
    'town': ["🏠", "🏠", "🏠", "🏡", "🏡", "🏡", "🏚"],
    'city': ["🏥", "🏦", "🏨", "🏤", "🏬", "🏢", "🏢", "🏢", "🏛"]
};

function make () {
    let car = makeCar(),
        sky = makeSky(),
        tileset = randomItem(Object.keys(TILESETS)),
        landscape;

    switch (tileset) {
        case 'beach':
            landscape = makeScenery(TILESETS[tileset], 3);
            landscape.push(SEA[0].repeat(20));
            break;

        default:
            landscape = makeScenery(TILESETS[tileset]);
            break;
    }

    return `${sky}\n${landscape[0]}\n${landscape[1]}\n${car}\n${landscape[2]}\n${landscape[3]}\n`;
}

function makeScenery(tileset, rows = 4) {
    let landscape = [];

    for (var i = 0; i < rows; i++) {
        landscape.push(makeRow(tileset));
    }

    return landscape;
}

function makeRow (tileset) {
    let row = '';

    for (var j = 0; j < 20; j++) {
        let tile = randomInt(1000);

        if (tile % 10 == 0) {
            row += randomItem(tileset);
        } else {
            row += " ";
        }
    }

    return row;
}

function makeSea () {
    return SEA[0].repeat(20);
}

function makeSky () {
    return randomItem(SKY);
}

function makeCar () {
    let leading = randomInt(2,10);

    return " ".repeat(leading) + CAR;
}

module.exports = make;