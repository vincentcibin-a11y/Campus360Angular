var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegename = "Campus360";
    $scope.totalstudent = 1200;
    $scope.totalFaculty = 85;
    $scope.showstudents = true;

    $scope.students = [
        "Cibin",
        "John",
        "Visakh",
        "Alena"
    ];

    $scope.addstudent = function () {

        if ($scope.newStudent && $scope.newStudent.trim() !== "") {

            $scope.students.push($scope.newStudent);

            $scope.totalstudent++;

            $scope.newStudent = "";

        }

    };

});