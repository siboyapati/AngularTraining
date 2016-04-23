var myapp = angular.module('myapp', ["ui.router"])

myapp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })

        .state('home.list', {
            url: '/list',
            templateUrl: 'partials/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            controller: 'aboutCtrl'
        });

});