define(function(require) {

  'use strict';

  var mn = require('marionette');

  return mn.LayoutView.extend({

    el: '.bb-root',

    template: require('text!partials/root.html')
  });
});