<!doctype html>
<html lang="en" ng-app="sms">
<head>
    <meta charset="utf-8">
    <title>sms</title>
    <link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
    <link href="css/styles.css" rel="stylesheet">
    <script src="lib/angular/angular.js"></script>
    <script src="lib/angular/angular-route.js"></script>
    <script src="lib/angular/angular-resource.js"></script>
    <script src="lib/angular/angular-cookies.js"></script>
    <script src="lib/underscore/underscore.js"></script>
    <script src="lib/underscore/angular-underscore-module.js"></script>
    <script src="js/main.js"></script>
    <script src="js/core/core.js"></script>
    <script src="js/core/authorizationService.js"></script>
    <script src="js/core/mainController.js"></script>
    <script src="js/student/student.js"></script>
    <script src="js/student/studentController.js"></script>
    <script src="js/student/studentService.js"></script>
</head>

<body>

<ng-view></ng-view>

<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-right"><h5>©Company 2014</h5></div>
        </div>
    </div>
</footer>

</body>
</html>
