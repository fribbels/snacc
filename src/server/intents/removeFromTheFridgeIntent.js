var Fridge = require('../utils/fridge.js');
var Alexa = require('../utils/alexa.js');

var removeFromTheFridgeIntent = function() {};

removeFromTheFridgeIntent.prototype.handler = function() {
    Alexa.load(this);

    var item = Alexa.getSlot('fridgeItem');

    Alexa.readUserFridge()
         .then(removeFromFridge(item))
         .catch(removeFromFridgeFail(item));
}

function removeFromFridge(item) {
    return (data) => {
        var fridge = new Fridge(data);
        fridge.remove(item);

        Alexa.writeFridgeToDb(fridge)
             .then(removeFromFridgeSuccess(item))
             .catch(removeFromFridgeFail(item));
    }
}

function removeFromFridgeSuccess(item) {
    return (result) => {
        Alexa.tell("Removing " + item + " from the fridge.");
    }
}

function removeFromFridgeFail(item) {
    return (error) => {
        console.log(error);
        Alexa.tell("Error removing " + item + " from the fridge.");
    }
}

module.exports = new removeFromTheFridgeIntent();