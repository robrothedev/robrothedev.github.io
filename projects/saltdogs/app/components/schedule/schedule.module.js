(function() {

	'use strict';

	angular
		.module('app.schedule',[])
		.controller('ListCtrl',require('./list.controller.js'))
		.controller('GameCtrl',require('./game.controller.js'))
		.factory('Schedule',require('./schedule.service.js'))
		.config(require('./schedule.config.js'));

})();