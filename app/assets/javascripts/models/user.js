GT.Models.User = Backbone.RelationalModel.extend({
  urlRoot: '/users',

  relations:[{
    type: Backbone.HasMany,
    key: "favorites",
    relatedModel: "GT.Models.Favorite",
    collectionType: "GT.Collections.Favorites",

    colectionOptions: function (user) {
      return { user : user };
    },

    reverseRelation: {
      key: "user",
      keySource: "user_id",
      includeInJSON: "id"
    }
  }],

});