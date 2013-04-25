GT.Models.GistFile = Backbone.RelationalModel.extend({
  schema: {
          body: 'Text',
          gist_id: 'Number'
      }
});