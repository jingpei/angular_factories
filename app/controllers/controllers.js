graphApp.controller("graphControllers", function($scope, $firebaseArray){

  var ref = new Firebase("https://dddataviz.firebaseio.com/data");

  $scope.graphData = $firebaseArray(ref);

  $scope.width = 600;
  $scope.height = 250;

  $scope.yAxis = "Booty Haul";
  $scope.xAxis = "2015";

  $scope.max = 342;

});

graphApp.controller("registration", function($scope){

  $scope.login = function(){
    alert($scope.user.email);
  }

  $scope.$on("$viewContentLoaded", function(){
   console.log($scope.myform);
 });

});    






















