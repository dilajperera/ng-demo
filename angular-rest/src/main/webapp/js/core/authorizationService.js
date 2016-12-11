angular.
    module('core').
    factory('authorizationService', ['$http', '$q', '$cookies', '$httpParamSerializer',
        function ($http, $q, $cookies, $httpParamSerializer) {

            function getAccessToken() {
                return $cookies.get('access_token');
            };

            function requestAccessToken(userDetails) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: 'oauth/token',
                    headers: {
                        "Authorization": "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                    },
                    data: $httpParamSerializer({
                        grant_type: "password",
                        username: userDetails.username,
                        password: userDetails.password
                    })
                }).then(function success(data) {
                    deferred.resolve(data.data);
                }, function error(response) {
                    deferred.reject(response);
                });
                return deferred.promise;
            };

            function requestAccessTokenByRefreshToken() {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: 'oauth/token',
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                    },
                    data: $httpParamSerializer({
                        grant_type: "refresh_token",
                        refresh_token: $cookies.get("refresh_token")
                    })
                }).then(function success(data) {
                    deferred.resolve(data.data);
                }, function error(response) {
                    deferred.reject(response);
                });
                return deferred.promise;
            };

            return ({
                getAccessToken: getAccessToken,
                requestAccessToken: requestAccessToken,
                requestAccessTokenByRefreshToken: requestAccessTokenByRefreshToken
            });
        }]);