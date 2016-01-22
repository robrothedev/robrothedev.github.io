(function() {

	'use strict';

	module.exports = config;
	config.$inject = ['$stateProvider','$ionicConfigProvider'];

	function config($stateProvider,$ionicConfigProvider) {
		$ionicConfigProvider.backButton.previousTitleText(false);
  		$ionicConfigProvider.backButton.icon('ion-chevron-left');
  		$ionicConfigProvider.backButton.text('');

		$stateProvider
			.state('app.schedule', {
				url: '/schedule',
				views: {
					'menuContent': {
						templateUrl: 'app/components/schedule/html/list.html',
						controller: 'ListCtrl as list_ctrl'
					}
				}
			})
			.state('app.game', {
				url: '/game/:gameIdx',
				views: {
					'menuContent': {
						templateUrl: 'app/components/schedule/html/game.html',
						controller: 'GameCtrl as game_ctrl'
					}
				}
			});
	}

})();