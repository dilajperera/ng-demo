angular
    .module('student', ['ngResource', 'ngCookies', 'ngRoute', 'underscore', 'core'])
    .directive('stdDetail', function () {
        return {
            templateUrl: 'views/templates/std-details.html'
        };
    })