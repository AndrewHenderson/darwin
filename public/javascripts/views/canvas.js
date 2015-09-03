define(function(require) {

  'use strict';

  var mn = require('marionette');

  return mn.ItemView.extend({

    tagName: 'canvas',

    className: 'view-canvas',

    template: false,

    attributes: {
      width: '500',
      height: '300'
    }
  });
});