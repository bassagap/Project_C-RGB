﻿
(function () {
    //[16.10.2016] bassagap: adding the ioncConfigProvider in order to place the tabs at the bottom of the application, adding templates states. 
    //[01.11.2016] bassagap: New states for account and configuration screens
    "use strict";

    angular.module("myapp", ['ionic', 'backand', "myapp.controllers", "myapp.services"])


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
        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, BackandProvider) {
            BackandProvider.setAppName('rcgb');
            BackandProvider.setAnonymousToken('c8331ac0-1ae1-488e-a454-05911a92dcd5');
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
                templateUrl: 'app/templates/menu/account.html',
                controller: 'PatientsCtrl'
            })
            .state("callibration", {
                url: '/calibration',
                templateUrl: 'app/templates/menu/calibration.html'
            })
            .state("configuration", {
                url: '/configuration',
                templateUrl: 'app/templates/menu/configuration.html',
                controller : 'ExercicesCtrl'

            })
            .state("sensors", {
                url: '/sensors',
                templateUrl: 'app/templates/menu/sensors.html'
            })

            .state("calendar", {
                url: '/calendar',
                templateUrl: 'app/templates/home/calendar.html',


            })

            $urlRouterProvider.otherwise("/app/home");
            $ionicConfigProvider.tabs.position('bottom');
            $ionicConfigProvider.vi


        });


})();