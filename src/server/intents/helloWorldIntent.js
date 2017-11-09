var Alexa = require('../utils/alexa.js');

var helloWorldIntent = function() {};

helloWorldIntent.prototype.handler = function() {
    Alexa.load(this);

    Alexa.tell("Hello world test");
}

module.exports = new helloWorldIntent();