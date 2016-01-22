(function() {
	
	'use strict';

	module.exports = config;
	config.$inject = ['$stateProvider','$ionicConfigProvider','$urlRouterProvider']

	function config($stateProvider,$ionicConfigProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/app/home');
		
		$ionicConfigProvider.backButton.previousTitleText(false);
  		$ionicConfigProvider.backButton.icon('ion-chevron-left');
  		$ionicConfigProvider.backButton.text('');

  		$stateProvider
    		.state('app', {
		    	url: '/app',
		    	abstract:true,
		    	templateUrl: 'app/components/app/html/menu.html'
		    })
		    .state('app.home', {
				url: '/home',
				views: {
					'menuContent': {
						templateUrl: 'app/components/app/html/home.html',
						controller: 'AppCtrl as app_ctrl'
					}
				}
			})
		    .state('app.tickets', {
				url: '/tickets',
				views: {
					'menuContent': {
						templateUrl: 'app/components/app/html/tickets.html'
					}
				}
			})
			.state('app.prices-seating', {
				url: '/prices-seating',
				views: {
					'menuContent': {
						templateUrl: 'app/components/app/html/prices-seating.html'
					}
				}
			})
			.state('app.directions-map', {
				url: '/directions-map',
				views: {
					'menuContent': {
						templateUrl: 'app/components/app/html/directions-map.html'
					}
				}
			});;
	}

})();