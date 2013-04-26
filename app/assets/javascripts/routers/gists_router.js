GT.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "gists/:id": "show",
    "favorites": "favorites",
    "form": "form"
  },

  initialize: function($sidebar, $content, gists, user, favorites) {
    this.gists = gists;
    this.$content = $($content);
    this.$sidebar = $($sidebar);
    this.user = user;
    this.favorites = favorites;
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
    GistDetailView.initialize(that.user, that.favorites);
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
    var NewGistFormView = new GT.Views.NewGistFormView({
      model: gist
    });
    NewGistFormView.initialize(that.user);

    that.$content.html(NewGistFormView.render().$el);
  }

})