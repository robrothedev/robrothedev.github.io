---
layout: examples
title: AngularJS Copy
---

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
