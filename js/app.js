// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
    .state('home', {
        url:'/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
    })
    .state('content', {
        url: '/content',
        templateUrl: 'templates/content.html',
        controller: 'ContentController',
    })
    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
    })
})

// Landing page controller: define $scope.number as a number
myApp.controller('HomeController', function($scope) {
    $scope.number = 6;
})

// About page controller: define $scope.about as a string
myApp.controller('AboutController', function($scope) {
    $scope.about = "Some string";
})

// Content controller: define $scope.url as an image
myApp.controller('ContentController', function($scope) {
    $scope.url = 'http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/cl/02/05/pecan-tarts-cl-346784-x.jpg?itok=VtWre0kU';
})

