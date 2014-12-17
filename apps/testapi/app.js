angular
.module('testApp',[])
.controller('TestCtrl',function($scope,$http) {
	$http.jsonp('http://itunes.apple.com/lookup?id=994656&entity=album',{params:{'callback':'JSON_CALLBACK'}})
	.then(function(response) {
		$scope.data = response.data;
	});
})
