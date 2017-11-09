var alexa_sdk = require('alexa-sdk');

var launchRequest = require('./intents/launchRequest.js');
var helloWorldIntent = require('./intents/helloWorldIntent.js');
var whatsInTheFridgeIntent = require('./intents/whatsInTheFridgeIntent.js');
var addToTheFridgeIntent = require('./intents/addToTheFridgeIntent.js');
var removeFromTheFridgeIntent = require('./intents/removeFromTheFridgeIntent.js');
var addQuantityIntent = require('./intents/addQuantityIntent.js');

var handlers = {
    'LaunchRequest': launchRequest.handler,
    'HelloWorldIntent': helloWorldIntent.handler,
    'AddToTheFridgeIntent': addToTheFridgeIntent.handler,
    'WhatsInTheFridgeIntent': whatsInTheFridgeIntent.handler,
    'RemoveFromTheFridgeIntent': removeFromTheFridgeIntent.handler,
    'AddQuantityIntent': addQuantityIntent.handler
};

exports.handler = function(event, context, callback) {
    try {
        var alexa = alexa_sdk.handler(event, context);

        alexa.registerHandlers(handlers);
        alexa.dynamoDBTableName = 'AlexaEvents'; 
        alexa.execute();
    } catch (err) {
        console.log(err);
        callback(err);
    }
};