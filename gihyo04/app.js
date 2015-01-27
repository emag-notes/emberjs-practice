'use strict';

// Application
var App = Ember.Application.create();

// Router
App.Router.map(function () {
  this.resource('posts', {path: '/'}, function () {
    this.route('show', {path: '/posts/:post_id'});
  });
});

// Route
App.PostsRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('posts.json');
  }
});

App.PostsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('posts').filter(function(post) {
      return post.id == Number(params.post_id);
    })[0];
  }
});

// Controller
App.PostsController = Ember.Controller.extend({
  pageTitle: 'Ember.js 関連の記事'
});

// Helper
Ember.Handlebars.helper('truncate', function (value, options) {
  var length = options.hash.length;

  if (value.length > length) {
    return value.slice(0, length) + '...';
  } else {
    return value;
  }
});

// Component
App.TruncateTextComponent = Ember.Component.extend({
  text: null,
  length: 20,
  isExpanded: false,
  expandText: 'もっと見る',
  actions: {
    expand: function() {
      this.set('isExpanded', true);
    }
  }
});