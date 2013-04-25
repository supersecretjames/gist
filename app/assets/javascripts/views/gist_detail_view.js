GT.Views.GistDetailView = Backbone.View.extend({

  render: function () {
    var that = this;
    console.log(that.model);
    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });
    // console.log(renderedContent);
    that.$el.html(renderedContent);
    return that;
  }

})