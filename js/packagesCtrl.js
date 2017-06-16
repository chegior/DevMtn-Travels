angular.module('devmtnTravel').controller('packagesCtrl',function ($scope,$stateParams,mainSrv){
// injected $stateParams due to this process some data on the URL
console.log($stateParams.country);
$scope.locations = [];

$scope.selectedPackInfo = function(country){
  $scope.locations = mainSrv.getPackages(country);
}

$scope.selectedPackInfo($stateParams);
console.log($scope.locations);




})
