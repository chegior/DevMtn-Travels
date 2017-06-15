angular.module('devmtnTravel').controller('bookedCtrl',function ($scope,$stateParams,mainSrv){
  // injected $stateParams due to this process some data on the URL
  $scope.city = $stateParams.id;
})
