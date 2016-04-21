angular.module('pocappwithcompassApp')
  .service('ocrService', function ($filter, $q, $http) {

    this.getAllValuesByTrackingNumber = function (trackingNumber) {
      var theurl = 'rest/OCRService/GetAllValuesByFileNameAndContext/MERIAL/' + trackingNumber;
      var deferred = $q.defer();

      $http.get(theurl)
        .success(function (data) {
          if (data.status == 'ERROR') {
            deferred.reject(data.status);
          } else {
            fileContents = data.fileContents;
            deferred.resolve(fileContents);
          }
        })
        .error(function (error, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    }

  });
