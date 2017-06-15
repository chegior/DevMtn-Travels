angular.module('devmtnTravel').controller('locationsCtrl',function ($scope,mainSrv){
  $scope.locations = [];

  $scope.getTravelInfo = function(){
    $scope.locations = mainSrv.getTravelInfo();
  }
  $scope.getTravelInfo();

})
