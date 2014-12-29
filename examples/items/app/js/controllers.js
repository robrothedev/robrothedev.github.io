app.controller('ItemsCtrl',function(Service) {
	var vm = this;

	vm.loading = true;
	vm.items = [];
	vm.new_item = {};

	// vm functions
	vm.addItem = addItem;
	vm.deleteItem = deleteItem;
	vm.checkItem = checkItem;

	// load the items
	Service.init().success(function(response) {
		vm.items = response.items;
		vm.loading = false;
	})

	// ---------------------------------------

	function addItem() {
		Service.addItem(vm.new_item).success(function(response) {
			if (response.item) {
				vm.new_item = {};
			}
		});
	}

	function checkItem(item) {
		Service.checkItem(item);
	}

	function deleteItem(item) {
		if (confirm('Are you sure you want to delete this?')) {
			Service.deleteItem(item);
		}
	}
})