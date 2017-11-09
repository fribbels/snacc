var ddb = require('./ddb.js');

var Alexa = function() {};
var self;

Alexa.prototype.load = function(_self) {
    self = _self;
}

//================================ Utils =======================================

Alexa.prototype.getUserId = function() {
    return self.event.session.user.userId;
}

Alexa.prototype.getSlot = function(key) {
    return self.event.request.intent.slots[key].value;
}

Alexa.prototype.setupAttributes = function() {
    if (Object.keys(self.attributes).length === 0) {
        self.attributes['fridgeItems'] = {};
    }
}

Alexa.prototype.test = function() {
    self.tell('alexa utils test');
}   

//=============================== Database =====================================

Alexa.prototype.readUserFridge = function() {
    var readPromise = ddb.get("UserData", {
        userid: this.getUserId(self)
    }); 

    return readPromise;
}

Alexa.prototype.writeFridgeToDb = function(fridge) {
    var writePromise = ddb.put("UserData", {
        userid: this.getUserId(),
        fridgeItems: fridge.encode()
    });

    return writePromise;
}

//=============================== Commands =====================================

Alexa.prototype.tell = function(text) {
    self.emit(':tell', text);
}

module.exports = new Alexa();