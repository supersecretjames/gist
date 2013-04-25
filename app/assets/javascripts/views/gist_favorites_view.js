GT.Views.GistFavoritesView = Backbone.View.extend({

  render: function(){
    var that = this;
    that.model.get("favorites").fetch({
      success: function() {
        var renderedContent = JST["favorites/index"]({
          favorites: that.model.get("favorites")
        });
        that.$el.html(renderedContent);
      }
    });
    return that;

  }

})