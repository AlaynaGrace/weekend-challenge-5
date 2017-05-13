myApp.service('MovieService',function($http){

  //get movies from OMDB
  this.getSearchMovies = function(searchWord){
    return $http({
      url: 'http://www.omdbapi.com/?s=' + searchWord,
      method: 'GET'
    }).then(function success(response){
      console.log(response.data.Search);
      return response.data.Search;
    }, function failure(response){
      console.log(response);
    });
  };

  this.getFavoriteMovies = function(){
    return $http({
      url: '/favoriteMovies',
      method: 'GET'
    }).then(function success(response){
      console.log(response.data);
      return response.data;
    }, function failure(response){
      console.log(response);
    });
  };

  this.addFavoriteMovie = function(title, poster, year){
    var objectToSend = {
        Title: title,
        Poster: poster,
        Year: year
    };
    console.log(objectToSend);

    return $http({
      url: '/favoriteMovies',
      method: 'POST',
      data: objectToSend
    }).then(function success(response){
      console.log(response);
    }, function failure(response){
      console.log(response);
    });
  };

  this.removeMovie = function(id){
    return $http({
      url: '/favoriteMovies/' + id,
      method: 'DELETE'
    }).then(function success(response){
      console.log(response);
    },function failure(response){
      console.log(response);
    });
  };



});
