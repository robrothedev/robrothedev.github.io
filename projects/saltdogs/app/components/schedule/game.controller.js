(function() {
	
	'use strict';

	module.exports = GameCtrl;
	GameCtrl.$inject = ['Schedule','$stateParams'];

	function GameCtrl(Schedule,$stateParams) {
		var vm = this;
		var gameIdx = $stateParams.gameIdx;

		// get the game by the index of the array from the url param
		vm.game = Schedule.games[gameIdx];
	}

})();