define(['views/lists/menuitem'], function(ListMenuItemView) {
  var ListMenuView = Backbone.View.extend({
    el: '.left-nav',
    tagName: 'ul',
    className: 'nav nav-list lists-nav',

    events: {
    },

    initialize: function() {
      this.collection.on('add', this.renderMenuItem, this);
    },

    render: function() {
      var $el = $(this.el),
          self = this;

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
    }
  });

  return ListMenuView;
});