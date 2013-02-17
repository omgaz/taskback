define(['views/lists/menuitem'], function(ListMenuItemView) {
  var ListMenuView = Backbone.View.extend({
    el: '.left-nav',
    tagName: 'ul',
    className: 'nav nav-list lists-nav',

    events: {
    },

    initialize: function() {
      this.collection.on('add', this.render, this);
    },

    render: function() {
      var $el = $(this.el),
          self = this;

      this.collection.each(function(list) {
        var item, sidebarItem;
        item = new ListMenuItemView({ model: list });
        $el.append(item.render().el);
      });

      return this;
    },

    renderMenuItem: function(model) {
      var item = new ListMenuItemView({ model: model });
      this.$el.append(item.render().el);

      if (!taskback.views.activeListMenuItem) {
        taskback.views.activeListMenuItem = item;
      }
      
      if (model.get('id') === taskback.views.activeListMenuItem.model.get('id')) {
        item.open();
      }
    },

    open: function() {
      taskback.models.activeList = this.model;
      return false;
    }
  });

  return ListMenuView;
});