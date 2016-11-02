(function () {
    //[01.11.2016] bassagap: New services for Execices and Patients, deleted all commented code from the previous trials with backand. 
    "use strict";

    angular.module("myapp.services", ['ionic', ])

    .factory("myappService", ["$rootScope", "$http", function ($rootScope, $http) {
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
    .factory('Exercices', function($filter){
        var exercices = 
        [
            {
                "id"            : 1, 
                "name"          : "Exercice 1",
                "periodicity"   : null, 
                "startDate"     : "20-10-2016",
                "endindDate"    : "16-12-2016",
                "active"        : null   
            },
            {
                "id"            : 2, 
                "name"          : "Exercice 2",
                "periodicity"   : "Daily", 
                "startDate"     : "20-10-2016",
                "endindDate"    : "16-12-2016",
                "active"        : null   
            }
        ];
        return{
            all: function() {
                return exercices;
            }, 
            remove: function (exercice) {
                exercices.splice(exercices.indexOf(exercice), 1);
            },
            add: function ( exercice){
                exercices.splice (0, 0, exercice);
            },
            get: function ( exerciceId){
                for (var i = 0; i < exercices.length; i++){
                    if(exercices[i].id === parseInt(exerciceId)){
                    return exercices[i];    
                    }                    
                }
                return null;
            }
        }
    })
    .factory('Patients', function ($filter) {
          var patients =
          [
              {
                  "id": 1,
                  "name": null,
                  "surname": null,
                  "birthDate": null,
                  "lesion": null
              },
          ];
          return {
              all: function () {
                  return patients;
              },
              remove: function (patient) {
                  patients.splice(patients.indexOf(patient), 1);
              },
              add: function (patient) {
                  exercices.splice(0, 0, patient);
              },
              get: function (patientId) {
                  for (var i = 0; i < patients.length; i++) {
                      if (patients[i].id === parseInt(patientId)) {
                          return patients[i];
                      }
                  }
                  return null;
              }
          }
      })


})();