'use strict';

// Application
var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true
});

App.Router.map(function () {
  this.route('posts', {path: '/'});
  this.route('post', {path: '/post/:id'});
});

App.Router.reopen({
  location: 'auto'
});

var posts = [
  {
    id: 1,
    title: 'Ember.js の世界',
    body: 'Ember.js の全体像をご紹介します。'
  },
  {
    id: 2,
    title: 'Ember.js の秘密',
    body: 'Ember.js のとっておきをご紹介します。'
  },
  {
    id: 3,
    title: 'Ember.js の奇妙な冒険',
    body: 'Ember.js の独特な世界観をご紹介します。'
  }
];

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    var found = posts.filter(function(post) {
      return post.id === Number(params.id);
    });
    return found[0];
  }
});