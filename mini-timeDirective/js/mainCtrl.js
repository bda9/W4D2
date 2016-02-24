angular.module('timeApp').controller('MainController', function($scope){
  $scope.name = "David";
  $scope.format = "medium";
  $scope.updateFormat = function(){
    if($scope.ctrlFormat === "medium"){
      $scope.ctrlFormat = "short";
    }
      else {
        $scope.ctrlFormat = "medium";
      }
    };
});
