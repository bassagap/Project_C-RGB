(function () {
    "use strict";

    angular.module("myapp", ["ionic", "myapp.controllers", "myapp.services"])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("app", {
                url: "/app",
                abstract: true,
                templateUrl: "app/templates/view-menu.html",
                controller: "appCtrl"
            })
            .state("app.home", {
                url: "/home",
                templateUrl: "app/templates/view-home.html",
                controller: "homeCtrl"
            })
            .state("account", {
                url: '/account',
                templateUrl: 'app/templates/account.html'
            })
            .state("calendar", {
                url: '/calendar',
                templateUrl: 'app/templates/calendar.html'
            })
            .state("notifications", {
                url: '/notifications',
                templateUrl: 'app/templates/notifications.html'
            })
               
            $urlRouterProvider.otherwise("/app/home");
        });
    //.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
    //    $scope.showMenu = function () {
    //        $ionicSideMenuDelegate.toggleLeft();
    //    }
})();