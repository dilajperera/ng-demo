angular.
    module('student').
    factory('studentFactory', ['$http', '$q','$cookies', 'authorizationService', function ($http, $q, $cookies, authorizationService) {

        function addStudent(student) {
            var deferred = $q.defer();
            var accessToken = authorizationService.getAccessToken();
            console.log(accessToken);
            $http({
                method: 'POST',
                url: 'students',
                data: student
            }).then(function success(response) {
                deferred.resolve(response.data);
            }, function error(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        function getAllStudents() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'students'
            }).then(function success(response) {
                deferred.resolve(response.data);
            }, function error(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        function deleteStudent(student) {
            var deferred = $q.defer();
            $http({
                method: 'DELETE',
                url: 'students/' + student.id,
                data: student
            }).then(function success(response) {
                deferred.resolve(response.data);
            }, function error(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return ({
            addStudent: addStudent,
            getAllStudents: getAllStudents,
            deleteStudent: deleteStudent
        });
    }]);