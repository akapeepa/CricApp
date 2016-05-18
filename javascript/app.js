//Module
var CricApp = angular.module('CricApp',['ngRoute']);

//Routes
CricApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/home.html',
    controller:'homeController'
  });
  .when('/scores',{
    templateUrl:'pages/scores.html',
    controller:'scoresController'
  });
});


//controller
CricApp.controller('homeController',['$scope','$http', function($scope,$http){
  $scope.getItems = function() {
    $http({method : 'GET',url : 'http://cricapi.com/api/cricket'})
    .success(function(data) {
      $scope.input = data;
      console.log($scope.input);
    });
  };
  $scope.getItems();
}]);
