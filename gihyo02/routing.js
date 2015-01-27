'use strict';

// Application
var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true
});

// Router
App.Router.map(function () {
  this.route('welcome', {path: '/'})
});

// Route
App.WelcomeRoute = Ember.Route.extend({
  model: function() {
    return {
      name: 'さとう'
    };
  }
});
