var mongoose = require('mongoose');

var config = require('../../config').getConfig();

mongoose.connect(config.MONGO_CREDENTIALS);

var db = mongoose.connection;

db.on('error', function(e){
    console.log('Mongoose DB Connection Error: ', e);
});

db.on('open', function(e){
    console.log('Mongoose DB Connection Established.');
});
