var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {
    $scope.collegename = "Campus360";
    $scope.totalstudent = 1200;
    $scope.totalFaculty = 85;

    console.log("Dashboard controller is loaded");

    $scope.students = [
        "Cibin", "John", "Visakh", "Alena"
    ];

    $scope.addstudent = function () {
        $scope.totalstudent++;
    };
});