'use strict';

var _randomInt = require('random-int');

var _randomInt2 = _interopRequireDefault(_randomInt);

var _randomItem = require('random-item');

var _randomItem2 = _interopRequireDefault(_randomItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CAR = ["🚗"];
var TRAFFIC = ["🚕", "🚙", "🚌", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜"];
var SKY = ["🌕", "☀", "️🌤"];
var SEA = ["🌊"];

var TILESETS = {
    'desert': ["🌵", "🌵", "🌵", "🌵", "🌵", "🌵", "🌴", "🌴", "🐪", "🐢", "🐎"],
    'forest': ["🌲", "🌲", "🌲", "🌲", "🌲", "🌲", "🌲", "🐇", "🌳", "🌳"],
    'beach': ["🌴", "🌴", "🌴", "🌴", "🍍", "🐢", "🗿", "🐚"],
    'field': ["🌾", "🌾", "🌾", "🌻", "🐍", "🐈"],
    'town': ["🏠", "🏠", "🏠", "🏡", "🏡", "🏡", "🏚"],
    'city': ["🏥", "🏦", "🏨", "🏤", "🏬", "🏢", "🏢", "🏢", "🏛"]
};

function make() {
    var car = makeCar(),
        sky = makeSky(),
        tileset = (0, _randomItem2.default)(Object.keys(TILESETS)),
        landscape = void 0;

    switch (tileset) {
        case 'beach':
            landscape = makeScenery(TILESETS[tileset], 3);
            landscape.push(SEA[0].repeat(20));
            break;

        default:
            landscape = makeScenery(TILESETS[tileset]);
            break;
    }

    return sky + '\n' + landscape[0] + '\n' + landscape[1] + '\n' + car + '\n' + landscape[2] + '\n' + landscape[3] + '\n';
}

function makeScenery(tileset) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var landscape = [];

    for (var i = 0; i < rows; i++) {
        landscape.push(makeRow(tileset));
    }

    return landscape;
}

function makeRow(tileset) {
    var row = '';

    for (var j = 0; j < 20; j++) {
        var tile = (0, _randomInt2.default)(1000);

        if (tile % 10 == 0) {
            row += (0, _randomItem2.default)(tileset);
        } else {
            row += " ";
        }
    }

    return row;
}

function makeSea() {
    return SEA[0].repeat(20);
}

function makeSky() {
    return (0, _randomItem2.default)(SKY);
}

function makeCar() {
    var leading = (0, _randomInt2.default)(2, 10);

    return " ".repeat(leading) + CAR;
}

module.exports = make;