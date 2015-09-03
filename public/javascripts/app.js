define(function(require) {

  'use strict';

  var bb = require('backbone');
  var mn = require('marionette');
  var hb = require('handlebars');

  var Router = require('router');

  // Overwrite Marionette internal template logic.
  mn.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
    return hb.default.compile(rawTemplate);
  };

  var app = new mn.Application();
  var router = new Router();
  bb.history.start();

  return app;
});