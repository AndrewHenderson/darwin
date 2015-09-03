define(function(require) {

  'use strict';

  var mn = require('marionette');

  return mn.LayoutView.extend({

    el: '.js-bb-root',

    template: '<div>Hello World!</div>'
  });
});