GT.Views.GistDetailView = Backbone.View.extend({

  initialize: function(user, favorites) {
    this.user = user;
    this.favorites = favorites;
  },

  render: function () {
    var that = this;
    var renderedContent = JST["gists/detail"]({
      gist: that.model
    });

    gistid = that.model.escape('id');
    this.foundfav = null;
    that.favorites.each(function(fav) {
         if (fav.get("gist_id") == gistid) {
           this.foundfav = fav;
         }
    });

    var $favoriteButton = $('<button>Favorite</button>');
    var $unfavoriteButton = $('<button>Unfavorite</button>');
    $favoriteButton.on('click', function (e) {
      var newFav = new GT.Models.Favorite();
      gistid = that.model.escape('id');
      userid = that.user.escape('id');
      newFav.url = "/gists/" + gistid + "/favorites";
      console.log("FAVORITING, STAND BACK")
      newFav.save({gist_id: gistid, user_id: userid},
                  {success: function() {
                    that.favorites.push(newFav);
                    this.foundFav = newFav;
                    $favoriteButton.hide();
                  }});
                });

    $unfavoriteButton.on('click', function (e) {
      gistid = that.model.escape('id');
      userid = that.user.escape('id');
      this.foundfav.url = "/gists/" + gistid + "/favorites/" + this.foundfav.get('id');
      this.foundfav.destroy({success: function() {
                    this.foundfav = null;
                    $unfavoriteButton.hide();
                  }
                });
    });
    that.$el.html(renderedContent).append($favoriteButton).append($unfavoriteButton);
    return that;
  }



})