define(function(require) {

  var bb = require('backbone');
  var RootView = require('views/root');

  return bb.Router.extend({

    initialize: function () {
      this.bind('all', this.change);
      this.rootView = new RootView();
    },

    routes: {
      '': 'default',
      '*actions(/)': 'unknown'
    },

    change: function () {
      //
    },

    default: function () {
      this.rootView.render();
    }
  });
});