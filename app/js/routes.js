define(function() {
  return Backbone.Router.extend({
    routes: {
      'lists/:id': 'openList'
    },

    initialize: function() {
    },

    openList: function(id) {
      if (taskback.collections.lists && taskback.collections.lists.length) {
        var list = taskback.collections.lists.get(id);
        if (list) {
          list.trigger('select');
        } else {
          console.error('List not found:', id);
        }
      }
    }
  });
});