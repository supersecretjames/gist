GT.Views.NewGistFormView = Backbone.View.extend({

  initialize: function(user) {
    this.user = user;
  },

  render: function() {
    var that = this;
    var userForm = new Backbone.Form({
      model: that.model
    }).render();
    var gistfiles = that.model.get('gist_files_attributes');
    var gistFileFormViewsArray = [];
    _.times(3, function(n) {
      var newFormView = that.createGistFileFormView(gistfiles);
      that.addGistFileFormViews(gistFileFormViewsArray, newFormView);
    });


    var $mybutton = $('<button>Submit</button>');
    $mybutton.addClass("submit");
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
      var $removeButton = $('<button>Remove</button>');
      $removeButton.on('click', function(e) {
        var index = gistFileFormViewsArray.indexOf(gistFileFormView);
        gistFileFormViewsArray.splice(index, 1);
        gistfiles.remove(gistFileFormView.model)
        $removeButton.remove();
        gistFileFormView.render().$el.remove();
          });
      that.$el.append($removeButton);
    });
    that.$el.append($mybutton);
    var $addGistFileButton = $('<button>Add File</button>');
    $addGistFileButton.addClass("addFile");
    $addGistFileButton.on('click', function(e){
      var newGistFileFormView = that.createGistFileFormView(gistfiles);
      gistFileFormViewsArray.push(newGistFileFormView);

      var $removeButton = $('<button>Remove</button>');
      $removeButton.on('click', function(e) {
        var index = gistFileFormViewsArray.indexOf(newGistFileFormView);
        gistFileFormViewsArray.splice(index, 1);
        gistfiles.remove(newGistFileFormView.model)
        $removeButton.remove();
        newGistFileFormView.render().$el.remove();
          });
      that.$el.append(newGistFileFormView.render().$el);
      that.$el.append($removeButton);
      that.$el.append($mybutton);
      that.$el.append($addGistFileButton);
    });
    that.$el.append($addGistFileButton);
    return that;
  },

  addGistFileFormViews: function(array, newFormView){
      array.push(newFormView);
    },

  createGistFileFormView: function(gistfiles){
    var that = this;
    var gistfile = new GT.Models.GistFile();
    gistfiles.push(gistfile);
    var NewGistFileFormView = new GT.Views.NewGistFileFormView({
      model: gistfile
    });
    return NewGistFileFormView;
  }

})