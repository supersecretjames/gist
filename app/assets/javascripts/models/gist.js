GT.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: '/gists',

  schema: {
          title: 'Text'
      },

  relations:[{
    type: Backbone.HasMany,
    key: "gist_files_attributes",
    relatedModel: "GT.Models.GistFile",
    collectionType: "GT.Collections.GistFiles",

    colectionOptions: function (gist) {
      return { gist : gist };
    },

    reverseRelation: {
      key: "gist",
      keySource: "gist_id",
      includeInJSON: "id"
    }
  }]

});