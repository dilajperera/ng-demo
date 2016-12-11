angular.module('core', ['ngRoute', 'ngResource', 'ngCookies'])
    .directive('headerTemplate', function () {
        return {
            templateUrl: 'views/templates/header.html'
        };
    });