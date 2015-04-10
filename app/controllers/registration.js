graphApp.controller("registration", function($scope, $location, $firebaseAuth, FIREBASE_URL, Authentication){

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);



  $scope.login = function(){
  	//considered a service
  	//basic rerouting using $location
	Authentication.login($scope.user)
	.then(function(user){
  		$location.path("/graph");
  	}).catch(function(err){
  		$scope.message = err.message;
  	});

    
  } //login


  $scope.register = function(){
  	$location.path("/graph");
  } //register




  $scope.$on("$viewContentLoaded", function(){
   console.log($scope.myform);
 });

});    