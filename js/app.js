const app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegeName = "Campus360";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;
    $scope.showStudents = true;

    $scope.fees = 25600;
    $scope.today = new Date();
    $scope.departments = ["CSE", "MBA", "MCA", "EEE", "BCA", "IMCA"];
    $scope.selectedDepartment = "CSE";

    $scope.students = [
        "Cibin",
        "John",
        "Visakh",
        "Alena"
    ];

    $scope.addStudent = function () {
        if ($scope.newStudent && $scope.newStudent.trim() !== "") {
            $scope.students.push($scope.newStudent.trim());
            $scope.totalStudents++;
            $scope.newStudent = "";
            $scope.showStudents = true;
        }
    };

});