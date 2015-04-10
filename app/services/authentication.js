// a factory/service
graphApp.factory('Authentication', 
	function($firebase, 
			$firebaseAuth, 
			$routeParams, 
			$location, 
			FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	var myObject = {
		//user information from where this is called - called from registration
		login: function(user){ 
			return auth.$authWithPassword({
				email : user.email, 
				password : user.password
			});

		} //login

	} // myObject

	//this will be registration
		var myObject = {
		//user information from where this is called - called from registration
		login: function(user){ 
			return auth.$authWithPassword({
				email : user.email, 
				password : user.password
			});

		} //login

	} // myObject

	return myObject;
}); //factory