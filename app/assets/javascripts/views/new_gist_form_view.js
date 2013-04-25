GT.Views.NewGistFormView = Backbone.View.extend({

  initialize: function(user) {
    this.user = user;
  },

  render: function() {
    var that = this;
    var userForm = new Backbone.Form({
      model: that.model
    }).render();
    var $mybutton = $('<button>Submit</button>');
    $mybutton.addClass('submit');
    $mybutton.on('click', function(e) {
      userForm.commit();
      that.model.set("user_id", that.user.escape('id'));
      console.log(that.model.attributes);
      that.model.save();
    });
    that.$el.html(userForm.el).append($mybutton);
    return that;
  }

})