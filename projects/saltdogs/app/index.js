(function() {

	'use strict';

	// dependencies
	require('../bower_components/angular/angular.js');
	require('../bower_components/angular-animate/angular-animate.js');
	require('../bower_components/angular-sanitize');
	require('../bower_components/angular-ui-router/release/angular-ui-router.js');
	require('../bower_components/ionic/release/js/ionic.bundle.js');

	// app module
	require('./components/app/app.module.js');

	// sub modules
	require('./components/schedule/schedule.module.js');

})();