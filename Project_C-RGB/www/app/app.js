
(function () {
    //[16.10.2016] bassagap: adding the ioncConfigProvider in order to place the tabs at the bottom of the application, adding templates states. 
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
        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            $stateProvider
            .state("app", {
                url: "/app",
                abstract: true,
                templateUrl: "app/templates/menu/view-menu.html",
                controller: "appCtrl"
            })
            .state("app.home", {
                url: "/home",
                templateUrl: "app/templates/home/view-home.html",
                controller: "homeCtrl"
            })
            .state("account", {
                url: '/account',
                templateUrl: 'app/templates/menu/account.html'
            })
            .state("callibration", {
                url: '/calendar',
                templateUrl: 'app/templates/menu/calibration.html'
            })
            .state("configuration", {
                url: '/configuration',
                templateUrl: 'app/templates/menu/configuration.html'
            })
            .state("sensors", {
                url: '/sensors',
                templateUrl: 'app/templates/menu/sensors.html'
            })
               
            $urlRouterProvider.otherwise("/app/home");
            $ionicConfigProvider.tabs.position('bottom');
            $ionicConfigProvider.vi
        });
})();