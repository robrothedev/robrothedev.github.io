app.directive('spinner',function() {
	var directive = {
		templateUrl: '/items/app/partials/spinner.html',
		restrict:'E',
		scope:{ message:'@'}
	}
	return directive;
})