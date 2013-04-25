window.GT = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($sidebar, $content, gistsData, user) {
    var gists = new GT.Collections.Gists(gistsData);
    var user = new GT.Models.User(user);
    new GT.Routers.GistsRouter($sidebar, $content, gists, user);
    Backbone.history.start();
  }

}