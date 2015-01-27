'use strict';

// Application
var App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var post = {
      title: '実践入門 Ember.js',
      body: 'Ember.js について解説します',
      tags: ['Ember.js', 'JavaScript'],
      status: 'newly',
      publishedAt: '2014年12月23日',
      author: {
        name: '佐藤竜之介',
        twitter: 'tricknotes'
      }
    };
    return post;
  }
});