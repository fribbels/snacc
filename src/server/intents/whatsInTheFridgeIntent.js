var Fridge = require('../utils/fridge.js');
var Alexa = require('../utils/alexa.js');

var whatsInTheFridgeIntent = function() {};

whatsInTheFridgeIntent.prototype.handler = function() {
    Alexa.load(this);

    Alexa.readUserFridge()
         .then(translateFridge())
         .catch(translateFridgeFail());
}

function translateFridge() {
    return (data) => {
        var fridge = new Fridge(data);
        var fridgeText = fridge.toText();

        Alexa.tell("I found " + fridgeText + " in the fridge.");
    }
}

function translateFridgeFail() {
    return (error) => {
        console.log(error);
        Alexa.tell("Error reading fridge: " + error);
    }
}

module.exports = new whatsInTheFridgeIntent();