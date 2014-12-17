var app = angular.module('app', []);

app.controller('PeopleCtrl', function () {
    vm = this;

    vm.people = [
          {first: 'Jimmy',last: 'Page'},
          {first: 'Ozzy',last: 'Osbourne'},
          {first: 'Iggy',last: 'Pop'}
    ];

    vm.copy = copy;
    vm.clone = clone;
    vm.update = update;
    vm.cancel = cancel;


    function copy(person) {
        vm.edit_person = angular.copy(person);
        vm.edit_person_idx = vm.people.indexOf(person);
    }

    function clone(person) {
        vm.edit_person = person;
        vm.edit_person_idx = vm.people.indexOf(person);
    }

    function update() {
        vm.people[vm.edit_person_idx] = vm.edit_person;
        vm.cancel();
    }

    function cancel() {
        vm.edit_person = {};
    }
});