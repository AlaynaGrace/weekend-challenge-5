myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/',{
    templateUrl: 'views/pages/search.html',
    controller: 'MovieController'
  }).when('/favorites',{
    templateUrl: 'views/pages/favorites.html',
    controller: 'FaveController'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});

myApp.controller('MovieController', function($http, MovieService, $scope){
  var vm = this;
  vm.searchResultMovies = [];
  // vm.searchWordIn
  vm.getSearchResults = function(){
      MovieService.getSearchMovies(vm.searchWordIn).then(function(data){
        vm.searchResultMovies = data;
        vm.searchWordIn = '';
    });
  };

  vm.addFavoriteMovie = function(title,poster,year){
    MovieService.addFavoriteMovie(title, poster, year);
    alert(title + " was added to favorites!");
  };



});

myApp.controller('FaveController',function($http, MovieService){
  var vm = this;
  vm.favoriteMovies = [];

  vm.getFavoriteMovies = function(){
    MovieService.getFavoriteMovies().then(function(data){
      vm.favoriteMovies = data;
    });
  };
  vm.getFavoriteMovies();
  console.log('fave movies:',vm.favoriteMovies);

  vm.removeMovie = function(id){
    MovieService.removeMovie(id).then(function(){
      vm.getFavoriteMovies();
    });
  };

});
