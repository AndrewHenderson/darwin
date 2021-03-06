define(function (require) {

  'use strict';

  var _ = require('underscore');
  var bb = require('backbone');

  return bb.Model.extend({

    urlRoot: '/api/lions',

    defaults: {
      type: 'lion',
      dob: Date.now(),
      lifespan: _.random(10, 14),
      mass: _.random(150, 225),
      height: _.random(2, 4),
      topSpeed: 80,
      prey: ['antelope', 'buffalo']
    }
  });
});
