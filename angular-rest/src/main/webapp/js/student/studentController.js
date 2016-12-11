angular.module('student').
    controller('studentCtrl', ['$scope', 'studentFactory', '_', function ($scope, studentFactory, _) {
        $scope.studentList = [];
        $scope.student = {};
        $scope.successMessage = false;
        getAllStudents();

        $scope.addStudent = function (student) {
            studentFactory.addStudent(student).then(function (student) {
                    $scope.student = {};
                    $scope.successMessage = true;
                },
                function (error) {
                    console.log('students details can not be saved' + error);
                });
        };

        function getAllStudents() {
            studentFactory.getAllStudents().then(function (students) {
                    $scope.studentList = students;
                    $scope.showEditPanel = false;
                },
                function (error) {
                    console.log('students details can not be loaded' + error);
                });
        };

        $scope.editStudent = function (student) {
            $scope.showEditPanel = true;
            $scope.student = student;
        };

        $scope.deleteStudent = function (student) {
            studentFactory.deleteStudent(student).then(function (result) {
                    $scope.studentList = _.without($scope.studentList, student);
                    $scope.student = {};
                },
                function (error) {
                    console.log('students details can not be saved' + error);
                });
        };
 }]);