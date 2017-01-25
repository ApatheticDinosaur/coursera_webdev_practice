(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.dishes = "";
  $scope.response = "";

  $scope.check = function () {
  	var dishList = $scope.dishes.split(',');
    if (dishList.indexOf("") != -1) {$scope.response = "Please input data first!";}
    else if (dishList.length <= 3) {$scope.response = "Eat away!";}
    else {$scope.response = "That's too much yo!";}
  };
}

})();
