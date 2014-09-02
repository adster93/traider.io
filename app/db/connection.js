var mongoose = require('mongoose');
var dbConfig = require("../../config.json").db_config;
var log = require('../logger/logger').logger("connection");

var port = (dbConfig.port.length > 0) ? ":" + dbConfig.port : '';
var login = (dbConfig.username.length > 0) ? dbConfig.username + ":" + dbConfig.password + "@" : '';
var uristring = "mongodb://" + login + dbConfig.host + port + "/" + dbConfig.dbName;
var mongoOptions = { db: { safe: true} };

// Connect to Database
mongoose.connect(uristring, { db: { safe: true} }, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
        log.info('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
    	console.log("DB Connection Created for " + uristring);
        log.info("DB Connection Created for " + uristring);
    }
});


exports.mongoose = mongoose;