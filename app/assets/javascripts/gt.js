window.GT = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($sidebar, $content, gistsData, user, favorites) {
    var gists = new GT.Collections.Gists(gistsData);
    var user = new GT.Models.User(user);
    var favorites = new GT.Collections.Favorites(favorites);
    new GT.Routers.GistsRouter($sidebar, $content, gists, user, favorites);
    Backbone.history.start();
  }

}