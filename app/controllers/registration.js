graphApp.controller("registration", function($scope){

  $scope.login = function(){
    alert($scope.user.email);
  }

  $scope.$on("$viewContentLoaded", function(){
   console.log($scope.myform);
 });

});    