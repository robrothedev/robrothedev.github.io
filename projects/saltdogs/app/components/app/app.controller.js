(function() {
	
	'use strict';

	module.exports = AppCtrl;
	AppCtrl.$inject = ['Schedule'];

	function AppCtrl(Schedule) {
		var vm = this;

		Schedule.returnData().then(function(response) {
			vm.next_game = Schedule.next_game;
		});
	}

})();