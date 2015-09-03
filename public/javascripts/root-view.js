define(function(require) {

  'use strict';

  var mn = require('marionette');
  var CanvasView = require('views/canvas');

  return mn.LayoutView.extend({

    el: '.view-root',

    template: require('text!partials/root.html'),

    regions: {
      canvas: '.region-canvas'
    },

    onRender: function() {
      this.showChildViews();
    },

    showChildViews: function() {
      this.showChildView('canvas', new CanvasView());
    }
  });
});