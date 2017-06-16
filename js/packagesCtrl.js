angular.module('devmtnTravel').controller('packagesCtrl',function ($scope,$stateParams,mainSrv){
// injected $stateParams due to this process some data on the URL
var country = $stateParams.country;
// console.log($stateParams.country);
$scope.locations = [];

$scope.selectedPackInfo = function(id){
  $scope.locations = mainSrv.getPackages(id);
}
if(!$stateParams.country){
  console.log('CLICK DIRECT ON PACKAGES')
}
$scope.selectedPackInfo( $stateParams.country);

console.log($scope.locations);




})
