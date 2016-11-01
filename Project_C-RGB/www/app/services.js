(function () {
    "use strict";

    angular.module("myapp.services", ['ionic', 'backand']).factory("myappService", ["$rootScope", "$http", function ($rootScope, $http) {
        var myappService = {};

        //starts and stops the application waiting indicator
        myappService.wait = function (show) {
            if (show)
                $(".spinner").show();
            else
                $(".spinner").hide();
        };

        return myappService;
    }])
    .service('ExercicesService', function ($http, Backand) {
        var baseUrl = '/1/objects/';
        var objectName = 'exercices/';

        function getUrl() {
            return Backand.getApiUrl() + baseUrl + objectName;
        }
        function getUrlForId(id) {
            return getUrl() + id;
        }

        getExercices = function () {
            return $http.get(getUrl());
        };

        addExercice = function (todo) {
            return $http.post(getUrl(), todo);
        }

        deleteExercice = function (id) {
            return $http.delete(getUrlForId(id));
        };

        return {

            getExercices     : getExercices,
            addExercice     : addExercice,
            deleteExercice  : deleteExercice
        }
    });
})();