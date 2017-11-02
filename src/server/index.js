var Alexa = require('alexa-sdk');
var Fridge = require('./fridge.js');
var ddb = require('./ddb.js');

//=============================== Handlers =====================================

function launchRequestHandler() {
    this.emit(':tell', 'Welcome to snack test');
}

function whatsInTheFridgeIntentHandler() {
    var readPromise = ddb.get("UserData", {
        userid: getUserId(this)
    });

    readPromise.then((result) => {
        var fridge = new Fridge(result.Item.fridgeItems);
        var text = fridge.toText();

        this.emit(':tell', "I found " + text + " in the fridge.");
    }).catch((error) => {
        console.log(error);
        this.emit(':tell', "Error reading the fridge " + error);
    });
}

function addToTheFridgeIntentHandler() {
    var newItem = getSlots(this).fridgeItem.value;

    var readPromise = ddb.get("UserData", {
        userid: getUserId(this)
    });

    readPromise.then((result) => {
        var fridge = new Fridge(result.Item.fridgeItems);
        fridge.add(newItem);

        var writePromise = ddb.put("UserData", {
            userid: getUserId(this),
            fridgeItems: fridge.encode()
        })

        writePromise.then((result) => {
            this.emit(':tell', "Adding " + newItem + " to the fridge.");
        }).catch((error) => {
            console.log(error);
            this.emit(':tell', "Error adding " + newItem + " to the fridge.");
        })
    }).catch((error) => {
        console.log(error);
        this.emit(':tell', "Error reading the fridge " + error);
    });
}

function removeFromTheFridgeIntentHandler() {
    var item = getSlots(this).fridgeItem.value;

    var readPromise = ddb.get("UserData", {
        userid: getUserId(this)
    });

    readPromise.then((result) => {
        var fridge = new Fridge(result.Item.fridgeItems);
        fridge.remove(item);

        var writePromise = ddb.put("UserData", {
            userid: getUserId(this),
            fridgeItems: fridge.encode()
        })

        writePromise.then((result) => {
            this.emit(':tell', "Removing " + item + " from the fridge.");
        }).catch((error) => {
            console.log(error);
            this.emit(':tell', "Error removing " + item + " from the fridge.");
        })
    }).catch((error) => {
        console.log(error);
        this.emit(':tell', "Error reading the fridge " + error);
    });
}

//=============================== Helpers ======================================

function getUserId(self) {
    return self.event.session.user.userId;
}

function getSlots(self) {
    return self.event.request.intent.slots;
}

//=============================== Exports=======================================

var handlers = {
    'LaunchRequest': launchRequestHandler,
    'AddToTheFridgeIntent': addToTheFridgeIntentHandler,
    'WhatsInTheFridgeIntent': whatsInTheFridgeIntentHandler,
    'RemoveFromTheFridgeIntent': removeFromTheFridgeIntentHandler
};

exports.handler = function(event, context, callback) {
    try {
        var alexa = Alexa.handler(event, context);
        alexa.registerHandlers(handlers);
        alexa.dynamoDBTableName = 'AlexaEvents'; 
        alexa.execute();
    } catch (err) {
        console.log(error);
        callback(err);
    }
};

//============================= Code templates =================================

/*
Promise sytax
--------------
promise.then((result) => {
    
}).catch((error) => {
    
});

*/

//================================= TODOs ======================================

/*

- Fridge toText: Refactor list text
    Add "and" in "found one x, one y, AND one z"
    Dont print extra comma

- Alexa add/remove: support quantities
    Put TWO grapes

- Fridge add/remove: support quantities

- Alexa: ambiguous quantities
    Put A BUNCH of grapes

- Alexa interaction model: difersify utterances
    Add grapes, got grapes, bought grapes

- Alexa: Add expiration date database support

- Alexa: Dialogue support with :asks
    I bought grapes - how many grapes? A bunch

- Alexa: Prefix support
    Add a banana. Add an apple.

- Alexa: State machine support

- Alexa: Convert to session state

- Learning: Learn quantities

- Alexa: Swtich to ddb attribute syntax

*/