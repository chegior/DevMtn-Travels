angular.module('devmtnTravel').controller('bookedCtrl',function ($scope,$stateParams,mainSrv){
  // injected $stateParams due to this process some data on the URL
  $scope.city = {};
  $scope.getCountryPack = function(id){
     $scope.city = mainSrv.getCountryPackages(id);

}

$scope.getCountryPack($stateParams);
console.log('THIS IS CITY CAR'+ $scope.city.country);

})
