GT.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: '/gists',

  schema: {
          title: 'Text'
      }
});