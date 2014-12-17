---
layout: examples
title: AngularJS Copy
---

<script>
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
</script>

<div ng-app="app" ng-controller="PeopleCtrl as ctrl" class="container">
    <table class="table">
        <tr ng-repeat="p in ctrl.people">
            <td>{{p.first}} {{p.last}}</td>
            <td width="10">
                <button ng-click="ctrl.copy(p)" class="btn btn-link">Copy</button>
            </td>
            <td width="10">
                <button ng-click="ctrl.clone(p)" class="btn btn-link">Clone</button>
            </td>
        </tr>
    </table>
    <hr>
    <form ng-submit="ctrl.update()" class="form-inline">
        <input type="text" ng-model="ctrl.edit_person.first" class="form-control">
        <br>
        <input type="text" ng-model="ctrl.edit_person.last" class="form-control">
        <br>
        <button type="submit" class="btn btn-primary">Update</button>
        <button type="button" class="btn btn-default" ng-click="ctrl.cancel()">Cancel</button>
    </form>
</div>
