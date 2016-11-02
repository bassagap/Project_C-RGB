(function () {
    //[01.11.2016] bassagap: New controllers for Exercices (ExercicesCtrl) and patients (PatientsCtrl)
    "use strict";

    angular.module("myapp.controllers", ['ionic', 'backand'])

    .controller("appCtrl", ["$scope", function ($scope) {
  
    }])

    //homeCtrl provides the logic for the home screen
    .controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.refresh = function () {
            //refresh binding
            $scope.$broadcast("scroll.refreshComplete");
    
        };
     }])
    .controller('NavCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.showMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.showRightMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
        };
    })
    .controller('ExercicesCtrl', function ($scope, Exercices) {
        $scope.exercices = Exercices.all();

    })

    .controller('PatientsCtrl', function ($scope, $location, Exercices) {
        $scope.patients = Patients.all();

        $scope.newPatient = {
            "id": 200000,
            "name": "",
            "surname": "",
            "birthdate": "2016-12-31T19:00:00-0500",
            "lesion": ""
        };
        

        $scope.create = function () {

            $scope.newPatient.id++;
            Patients.add($scope.newPatient);
            $location.path('/sensors');

        }

    })
    //errorCtrl managed the display of error messages bubbled up from other controllers, directives, myappService
    .controller("errorCtrl", ["$scope", "myappService", function ($scope, myappService) {
        //public properties that define the error message and if an error is present
        $scope.error = "";
        $scope.activeError = false;

        //function to dismiss an active error
        $scope.dismissError = function () {
            $scope.activeError = false;
        };

        //broadcast event to catch an error and display it in the error section
        $scope.$on("error", function (evt, val) {
            //set the error message and mark activeError to true
            $scope.error = val;
            $scope.activeError = true;

            //stop any waiting indicators (including scroll refreshes)
            myappService.wait(false);
            $scope.$broadcast("scroll.refreshComplete");

            //manually apply given the way this might bubble up async
            $scope.$apply();
        });
    }]);
})();