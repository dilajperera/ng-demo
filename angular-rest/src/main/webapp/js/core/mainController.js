angular.module('core')
    .controller('mainCtrl', ['$scope', '$route', function ($scope, $route) {
        $scope.$route = $route;
    }])
    .controller('loginCtrl', ['$scope', '$location', '$http', '$cookies', 'authorizationService',
        function ($scope, $location, $http, $cookies, authorizationService) {

            $scope.login = function (userDetails) {
                authorizationService.requestAccessToken(userDetails).then(function (data) {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + data.access_token;
                    $cookies.put("access_token", data.access_token);
                    $cookies.put("refresh_token", data.refresh_token);
                    $location.path('/profiles');
                }, function (error) {
                    $location.path('/login');
                });
            };
   }]);