const app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    // College Details
    $scope.collegeName = "Campus360";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;
    $scope.showStudents = true;

    // Filters
    $scope.fees = 25600;
    $scope.today = new Date();

    // Departments
    $scope.departments = [
        "CSE",
        "MBA",
        "MCA",
        "EEE",
        "BCA",
        "IMCA"
    ];

    $scope.selectedDepartment = "CSE";

    // Student List
    $scope.students = [
        "Cibin",
        "John",
        "Visakh",
        "Alena"
    ];


    $scope.student = {};
    $scope.registeredStudents = [];

    $scope.isDisabled = false;
    $scope.isReadOnly = false;

    $scope.addStudent = function () {

        if ($scope.newStudent && $scope.newStudent.trim() !== "") {
            $scope.students.push($scope.newStudent.trim());
            $scope.totalStudents++;
            $scope.newStudent = "";
            $scope.showStudents = true;
            $scope.addStudentForm.$setPristine();
            $scope.addStudentForm.$setUntouched();
        }

    };

    // Register Student
    $scope.registerStudent = function () {

        if ($scope.studentForm.$valid) {

            $scope.registeredStudents.push({
                name: $scope.student.name,
                email: $scope.student.email,
                phone: $scope.student.phone,
                gender: $scope.student.gender,
                department: $scope.student.department,
                rollNo: $scope.student.rollNo,
                age: $scope.student.age
            });

            alert("Student Registered Successfully!");

            $scope.student = {};

            $scope.studentForm.$setPristine();
            $scope.studentForm.$setUntouched();
        }

    };

    $scope.allowAdmission = function () {

        $scope.isDisabled = false;

        alert("Admission Enabled!");

    };

    $scope.toggleReadOnly = function () {

        $scope.isReadOnly = !$scope.isReadOnly;

    };

});