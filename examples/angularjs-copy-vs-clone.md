---
layout: examples
title: AngularJS Copy vs. Clone
---
<script src="{{ site.baseurl }}examples/js/angular-copy.js"></script>

<h2>{{ page.title }}</h2>
<hr>
<div ng-app="app" ng-controller="PeopleCtrl as ctrl" class="container">
    <table class="table">
        <tr ng-repeat="p in ctrl.people">
            <td><span ng-bind="p.first"></span> <span ng-bind="p.last"></span></td>
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
    	<div class="form-group">
        	<input type="text" ng-model="ctrl.edit_person.first" class="form-control">
        </div>
        <div class="form-group">
        	<input type="text" ng-model="ctrl.edit_person.last" class="form-control">
        </div>
        <div class="form-group">
        	<button type="submit" class="btn btn-primary">Update</button>
        	<button type="button" class="btn btn-link" ng-click="ctrl.cancel()">Cancel</button>
        </div>
    </form>
</div>
