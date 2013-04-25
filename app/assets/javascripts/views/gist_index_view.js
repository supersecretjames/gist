GT.Views.GistIndexView = Backbone.View.extend({

  render: function() {
    var that = this;
    var renderedContent = JST["gists/list"]({
      gists: that.collection
    });

    that.$el.html(renderedContent);
    return that;

  }

})