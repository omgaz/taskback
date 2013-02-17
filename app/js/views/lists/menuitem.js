define(['text!templates/lists/menuitem.html', 'views/tasks/index'], function(template, TasksIndexView) {
  var ListMenuItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-menu-item',

    template: _.template(template),

    events: {
      'click': 'open'
    },

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    render: function() {
      var $el = $(this.el);
      $el.data('listId', this.model.get('id'));
      $el.html(this.template(this.model.toJSON()));
      return this;
    },

    open: function() {
      if (taskback.views.activeListMenuItem) {
        taskback.views.activeListMenuItem.$el.removeClass('active');
      }

      taskback.views.activeListMenuItem = this;
      this.$el.addClass('active');

      // Render the tasks
      if (taskback.views.tasksIndexView) {
        taskback.views.tasksIndexView.remove();
      }

      taskback.views.tasksIndexView = new TasksIndexView({ collection: taskback.collections.tasks, model: this.model });
      taskback.views.app.$el.find('#tasks-container').html(taskback.views.tasksIndexView.render().el);

      return false;
    }
  });

  return ListMenuItemView;
});