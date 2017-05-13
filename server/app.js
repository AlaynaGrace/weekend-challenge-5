var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var mongo = require('./modules/mongoConnect.js');
var movies = require('./modules/favoriteMovies.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/favoriteMovies', movies);

var port = process.env.PORT || 5000;

app.listen(port,function(){
  console.log('server up on', port);
});


//LAST ROUTE
app.get('/*',function(req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});
