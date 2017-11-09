var Fridge = require('../utils/fridge.js');
var Alexa = require('../utils/alexa.js');

var addQuantityIntent = function() {};

addQuantityIntent.prototype.handler = function() {
    Alexa.load(this);

    var item = Alexa.getSlot('fridgeItem');
    var quantity = Alexa.getSlot('itemQuantity');

    console.log("Slots:");
    console.log(item);
    console.log(quantity);

    Alexa.readUserFridge()
         .then(addToFridge(item, quantity))
         .catch(addToFridgeFail(item, quantity));
}

function addToFridge(item, quantity) {
    return (data) => {
        var fridge = new Fridge(data);
        fridge.add(item, quantity);

        Alexa.writeFridgeToDb(fridge)
             .then(addToFridgeSuccess(item, quantity))
             .catch(addToFridgeFail(item, quantity));
    }
}

function addToFridgeSuccess(item, quantity) {
    return (result) => {
        Alexa.tell("Adding quantity " + quantity + " " + item + " to the fridge.");
    }
}

function addToFridgeFail(item, quantity) {
    return (error) => {
        console.log(error);
        Alexa.tell("Error adding quantity " + quantity + " " + item + " to the fridge.");
    }
}

module.exports = new addQuantityIntent();