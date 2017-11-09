var Alexa = require('../utils/alexa.js');
var launchRequest = function() {};

launchRequest.prototype.handler = function() {
    Alexa.load(this);
    Alexa.setupAttributes();
    
    Alexa.tell('Welcome to snack test');
}

module.exports = new launchRequest();