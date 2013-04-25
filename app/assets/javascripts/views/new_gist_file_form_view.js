GT.Views.NewGistFileFormView = Backbone.View.extend({

  render: function(){
    var that = this;
    this.fileform = new Backbone.Form({
      model: that.model
    });
    var userForm = that.fileform.render();
    that.$el.html(userForm.el)
    return that;
  },

  gistfileform: function() {
    var that = this;
    return that.fileform;
  }

})