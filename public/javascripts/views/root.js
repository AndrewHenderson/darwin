define(function(require) {

  'use strict';

  var mn = require('marionette');
  var ActionView = require('views/action');
  var CanvasView = require('views/canvas');
  var canvasView = new CanvasView();

  return mn.LayoutView.extend({

    el: '.view-root',

    template: require('text!partials/root.html'),

    regions: {
      action: '.region-action',
      canvas: '.region-canvas'
    },

    childEvents: {
      start: 'start'
    },

    onRender: function() {
      this.showChildViews();
    },

    showChildViews: function() {
      this.showChildView('action', new ActionView());
      this.showChildView('canvas', canvasView);
    },

    start: function() {
      canvasView.start();
    }
  });
});