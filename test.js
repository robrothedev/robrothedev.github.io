var app = angular.module('app', []);

app.controller('PeopleCtrl', function ($scope) {
    $scope.people = [
          {first: 'Jimmy',last: 'Page'},
          {first: 'Ozzy',last: 'Osbourne'},
          {first: 'Iggy',last: 'Pop'}
    ];

    $scope.copyPerson = function (person) {
        $scope.edit_person = angular.copy(person);
        $scope.edit_person_idx = $scope.people.indexOf(person);
    };

    $scope.clonePerson = function (person) {
        $scope.edit_person = person;
        $scope.edit_person_idx = $scope.people.indexOf(person);
    };

    $scope.updatePerson = function () {
        $scope.people[$scope.edit_person_idx] = $scope.edit_person;
        $scope.cancelEdit();
    };

    $scope.cancelEdit = function () {
        $scope.edit_person = {};
    };
});