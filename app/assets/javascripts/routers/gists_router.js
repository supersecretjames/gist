GT.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "gists/:id": "show",
    "favorites": "favorites",
    "form": "form"
  },

  initialize: function($sidebar, $content, gists, user) {
    this.gists = gists;
    this.$content = $($content);
    this.$sidebar = $($sidebar);
    this.user = user;
  },

  index: function(){
    var that = this;
    that.$content.empty();
    var gistIndexView = new GT.Views.GistIndexView({ collection: that.gists });
    that.$sidebar.html(gistIndexView.render().$el);
  },

  show: function(id) {
    var that = this;
    var gist = that.gists.get(id);
    var GistDetailView = new GT.Views.GistDetailView({
      model: gist
    });
    that.$content.html(GistDetailView.render().$el);
  },

  favorites: function() {
    var that = this;
    that.$content.empty();
    var GistFavoritesView = new GT.Views.GistFavoritesView({ model: that.user });
    that.$sidebar.html(GistFavoritesView.render().$el);
  },

  form: function() {
    var that = this;
    var gist = new GT.Models.Gist();
    var userForm = new Backbone.Form({
      model: gist
    }).render();
    var $mybutton = $('<button>Submit</button>');
    $mybutton.addClass('submit');
    $mybutton.on('click', function(e) {
      userForm.commit();
      gist.set("user_id", that.user.escape('id'));
      console.log(gist.attributes);
      gist.save();
    });
    that.$content.html(userForm.el).append($mybutton);

  }

})