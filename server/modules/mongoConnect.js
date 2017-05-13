var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/movies";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

module.exports = MongoDB;
