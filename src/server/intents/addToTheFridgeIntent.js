var Fridge = require('../utils/fridge.js');
var Alexa = require('../utils/alexa.js');

var addToTheFridgeIntent = function() {};

addToTheFridgeIntent.prototype.handler = function() {
    Alexa.load(this);

    var item = Alexa.getSlot('fridgeItem');

    Alexa.readUserFridge()
         .then(addToFridge(item))
         .catch(addToFridgeFail(item));
}

function addToFridge(item) {
    return (data) => {
        var fridge = new Fridge(data);
        fridge.add(item);

        Alexa.writeFridgeToDb(fridge)
             .then(addToFridgeSuccess(item))
             .catch(addToFridgeFail(item));
    }
}

function addToFridgeSuccess(item) {
    return (result) => {
        Alexa.tell("Adding " + item + " to the fridge.");
    }
}

function addToFridgeFail(item) {
    return (error) => {
        console.log(error);
        Alexa.tell("Error adding " + item + " to the fridge.");
    }
}

module.exports = new addToTheFridgeIntent();