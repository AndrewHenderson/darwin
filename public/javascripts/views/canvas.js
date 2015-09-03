define(function(require) {

  'use strict';

  var mn = require('marionette');
  var createjs = require('easel');

  return mn.ItemView.extend({

    tagName: 'canvas',

    className: 'view-canvas',

    template: false,

    attributes: {
      width: '500',
      height: '300'
    },

    onRender: function() {
      new createjs.Stage(".view-canvas");
    }
  });
});