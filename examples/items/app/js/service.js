app.factory('Service',function($http) {
	var api_url = '/items/';
	var service = {
		items: [],
		init: init,
		addItem: addItem,
		checkItem: checkItem,
		deleteItem: deleteItem
	}

	return service;

	// -----------------------------------------
	// service functions

	function post(path,params) {	// post function not exposed to the controller
		return $http.post(api_url + path,params).success(function(response) {
			console.log(response);
			return response;
		})
	}

	// ------------------------------------------

	function init() {
		return $http.get(api_url + 'init/').success(function(response) {
			service.items = response.items;
			return response;
		});
	}

	function addItem(item) {
		return post('insert/',item).success(function(response) {
			if (response.item) {
				service.items.push(response.item);
			}
			return response;
		})
	}

	function checkItem(item) {
		post('check-item/',item);
	}

	function deleteItem(item) {
		return post('delete/',item).success(function(response) {
			if (response.deleted) {
				var idx = service.items.indexOf(item);
				service.items.splice(idx,1);
			}
			return response;
		})
	}
})