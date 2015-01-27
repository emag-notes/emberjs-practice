'use strict';

// Application
var App = Ember.Application.create();

// Router
App.Router.map(function () {
  this.resource('posts', function () {
    this.route('show', {path: '/:post_id'});
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
    var id = Number(params.post_id);
    var posts = this.modelFor('posts');

    return posts.filter(function (post) {
      return post.id == id;
    })[0];
  }
});

App.LoadingRoute = Ember.Route.extend({
  activate: function() {
    console.log('読込中です');
  }
});

App.ErrorRoute = Ember.Route.extend({
  activate: function() {
    console.log('エラーです');
  }
});