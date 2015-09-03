define(function(require) {

  'use strict';

  var mn = require('marionette');

  return mn.ItemView.extend({

    className: 'view-action',

    template: require('text!partials/action.html'),

    ui: {
      start: '.js-start',
    },

    events: {
      'click @ui.start': 'start',
    },

    start: function() {
      this.triggerMethod('start');
    }
  });
});