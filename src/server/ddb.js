var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();
var ddb = function() {};


ddb.prototype.put = function(table, item) {
    var params = {
        TableName: table,
        Item: item
    };

    console.log("putting dynamo");

    return dynamo.putItem(params).promise();
}

ddb.prototype.get = function(table, key) {
    var params = {
        TableName: table,
        Key: key
    };

    return dynamo.getItem(params).promise();
}

module.exports = new ddb();