GT.Views.NewGistFormView = Backbone.View.extend({

  initialize: function(user) {
    this.user = user;
  },

  render: function() {
    var that = this;
    var userForm = new Backbone.Form({
      model: that.model
    }).render();
    var gistFileFormViewsArray = [];
    _.times(3, function(n) {
      var newFormView = that.createGistFileFormView();
      that.addGistFileFormViews(gistFileFormViewsArray, newFormView);
    });
    var $mybutton = $('<button>Submit</button>');
    $mybutton.addClass('submit');
    $mybutton.on('click', function(e) {
      _(gistFileFormViewsArray).each(function(gistFileFormView) {
        gistFileFormView.gistfileform().commit();
      });
      userForm.commit();
      that.model.set("user_id", that.user.escape('id'));
      that.model.save();
    });
    that.$el.html(userForm.el);
    _(gistFileFormViewsArray).each(function(gistFileFormView) {
      that.$el.append(gistFileFormView.render().$el);
    });
    that.$el.append($mybutton);
    return that;
  },

  addGistFileFormViews: function(array, newFormView){
      array.push(newFormView);
    },

  createGistFileFormView: function(){
    var that = this;
    var gistfiles = that.model.get('gist_files_attributes');
    var gistfile = new GT.Models.GistFile();
    gistfiles.push(gistfile);
    var NewGistFileFormView = new GT.Views.NewGistFileFormView({
      model: gistfile
    });
    return NewGistFileFormView;
  }

})