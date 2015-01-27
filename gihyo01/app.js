'use strict';

// Application
var App = Ember.Application.create();

// 以降は省略可

// Router
App.Router.map(function () {
  this.resource('index', {path: '/'})
});

// Route
App.IndexRoute = Ember.Route.extend({
  model: function() {
    var you = {name: null}
    return you;
  },
  controllerNamej: 'index',
  viewName: 'index'
});

// Controller
App.IndexController = Ember.ObjectController.extend({
  templateName: 'index'
});