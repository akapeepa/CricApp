//Module
var CricApp = angular.module('CricApp',['ngRoute','ngResource']);

//Routes
CricApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/home.html',
    controller:'homeController',
    controllerAs: 'hc'
  })
  .when('/scores',{
    templateUrl:'pages/scores.html',
    controller:'scoresController',
    controllerAs:'sc'
  })
});

//Service


//Controller
CricApp.controller('homeController',['$scope', '$http','$resource', function($scope, $http , $resource){


}]);

CricApp.controller('scoresController',['$scope', '$http','$resource', function($scope, $http , $resource){

}]);
