(function() {

	'use strict';

	// dependencies
	require('angular');
	require('angular-animate');
	require('angular-sanitize');
	require('angular-ui-router');
	require('ionic');

	// app module
	require('./components/app/app.module.js');

	// sub modules
	require('./components/schedule/schedule.module.js');

})();