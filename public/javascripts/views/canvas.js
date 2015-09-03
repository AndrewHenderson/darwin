define(function(require) {

  'use strict';

  var mn = require('marionette');
  var createjs = require('easel');
  var Lions = require('collections/lions');
  var Lion = require('models/lion');

  return mn.ItemView.extend({

    tagName: 'canvas',

    className: 'view-canvas',

    template: false,

    attributes: {
      width: '500',
      height: '300'
    },

    onShow: function() {
      //var stage = new createjs.Stage(".view-canvas");
      //var circle = new createjs.Shape();
      //circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
      //circle.x = 100;
      //circle.y = 100;
      //stage.addChild(circle);
      //stage.update();

      //this.createLion();
      this.fetchLions();
    },

    createLion: function() {
      var theodore = new Lion({
        name: 'Theodore'
      });
      theodore.save();
    },

    fetchLions: function() {
      var lions = new Lions();
      lions.fetch();
    }
  });
});