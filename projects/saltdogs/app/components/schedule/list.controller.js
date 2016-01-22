(function() {
	
	'use strict';

	module.exports = ListCtrl;
	ListCtrl.$inject = ['Schedule'];

	function ListCtrl(Schedule) {
		var vm = this;

		vm.loading = true;
		vm.checkFilter = checkFilter;

		Schedule.returnData().then(function(response) {
			vm.games = Schedule.games;
			vm.teams = Schedule.teams;
			vm.loading = false;
		});

		function checkFilter() {
			alert('hi');
			if (!vm.filter_team) {
				vm.filter_team = false;
				console.log('yes');
			}
		}
	}

})();