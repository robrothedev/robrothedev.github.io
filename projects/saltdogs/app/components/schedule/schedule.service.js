(function(){
	
	'use strict';

	module.exports = Schedule;
	Schedule.$inject = ['$http','$q'];

	function Schedule($http,$q) {
		var data_q = $q.defer();
		var json_file = 'app/components/schedule/json/schedule_2017.json';
		var service = {
			games: [],
			teams: [],
			next_game: null,
			returnData: returnData
		};

		init();

		return service;

		function init() {
			return $http.get(json_file).then(function(response) {
				var games = response.data;
				var today = moment().format('YYYYMM');	// day of year

				angular.forEach(games,function(game) {
					// format the date
					game.date_string = moment(game.start).format('MMMM Do YYYY h:mm a');

					// apply the image file extension for the mascot image
					game.mascot_img = game.mascot_img + '.png';

					// get the next game date
					if (!service.next_game) {
						var game_day = moment(game.start).format('YYYYMM');

						if (game_day == today) {
							game.date_string = 'Today at ' + moment(game.start).format('h:mm a')
							service.next_game = game;
						}
						else {
							if (game_day > today) {
								service.next_game = game;
							}
						}
					}

					// create a unique array of teams for a filter
					var team = game['city'];
					if (service.teams.indexOf(team) === -1) {
						var team_object = team;
						service.teams.push(team);
					}
				});

				service.games = games;

				data_q.resolve(response);
			});
		}

		function returnData() {
			return $q.when('data_q').then(function() {
				return data_q.promise;
			});
		}
	}

})();