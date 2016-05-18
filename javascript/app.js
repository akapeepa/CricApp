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
  .when('/scores/:id',{
    templateUrl:'pages/scores.html',
    controller:'scoresController',
    controllerAs:'sc'
  })
});

//Service
CricApp.service('cricService', function() {
 this.dt = new Date();
})

//Controller
CricApp.controller('homeController',['$scope', '$resource', 'cricService', function($scope, $resource, cricService){
  var vm = this;
  vm.getData = $resource('http://cricapi.com/api/cricket').get();

  vm.myDate = cricService.dt;
}]);

CricApp.controller('scoresController',['$scope', '$routeParams','$resource', 'cricService', function($scope, $routeParams , $resource, cricService){
  var vm = this;
  vm.id = $routeParams.id;

  vm.getScores = $resource('http://cricapi.com/api/cricketScore',{unique_id:vm.id}).get();
  console.log(vm.getScores);
}]);
