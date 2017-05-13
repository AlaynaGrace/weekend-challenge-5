var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var favoriteMovieSchema = mongoose.Schema({
  Title: String,
  Poster: String,
  Year: Number
});

var favoriteMovie = mongoose.model('favoritemovies', favoriteMovieSchema);

router.get('/',function(req,res){
  favoriteMovie.find({}, function(err, data){
    if(err){
      res.sendStatus(500);
    }
    else{
      res.send(data);
    }
  });
});

router.post('/',function(req,res){
  console.log(req.body);
  var faveMovie = favoriteMovie(req.body);
  faveMovie.save(function(err){
    if(err){
      res.sendStatus(500);
    }
    else{
      res.sendStatus(201);
    }
  });
});

router.delete('/:id',function(req,res){
  var objectToDelete = {
    _id: req.params.id
  };
  favoriteMovie.remove(objectToDelete, function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
    }
  });
});

module.exports = router;
