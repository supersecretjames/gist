GT.Views.GistDetailView = Backbone.View.extend({

  initialize: function(user) {
    this.user = user;
  },

  render: function () {
    var that = this;
    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });
    var $favoriteButton = $('<button>Add Favorite</button>');
    $favoriteButton.on('click', function (e) {
      var newFav = new GT.Models.Favorite();
      gistid = that.model.escape('id');
      userid = that.user.escape('id');
      newFav.url = "/gists/" + gistid + "/favorites";
      newFav.save({gist_id: gistid, user_id: userid},
                  {success: function() {
                    $favoriteButton.remove();
                    that.$el.append($unfavoriteButton);
                  }
                });
    });

    that.$el.html(renderedContent).append($favoriteButton);
    return that;
  }



})