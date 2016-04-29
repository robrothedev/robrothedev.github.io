(function() {
	
	'use strict';

	module.exports = ListCtrl;
	ListCtrl.$inject = ['Schedule','$location'];

	function ListCtrl(Schedule,$location) {
		var vm = this;

		vm.loading = true;
		vm.checkFilter = checkFilter;
		vm.viewGame = viewGame;

		Schedule.returnData().then(function(response) {
			vm.games = Schedule.games;
			vm.teams = Schedule.teams;
			vm.loading = false;
		});

		function checkFilter() {
			if (!vm.filter_team) {
				vm.filter_team = false;
				console.log('yes');
			}
		}

		function viewGame(game) {
			alert(game);
			var idx = vm.games.indexOf(game);
			$location.path('/app/game/' + idx);
		}
	}

})();