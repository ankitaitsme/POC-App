'use strict';

/**
 * @ngdoc function
 * @name pocappwithcompassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocappwithcompassApp
 */
angular.module('pocappwithcompassApp')
  .controller('MainCtrl', function ($scope, ocrService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.getValues = function () {

      console.log('i am now going to get values' + $scope.trackingNumber);
      ocrService.getAllValuesByTrackingNumber($scope.trackingNumber).then(function (response) {
        $scope.fileContents = response;


      }, function (error) {
        console.log("error message");
        $scope.showErrorMessage = true;
        $scope.errorMessage = "There was an error accessing submission Image info. Please try again later";
        return;
      });

    }
  });
