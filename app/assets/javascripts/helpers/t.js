Ember.Handlebars.helper('t', function(property, options) {
  var self = this;
  var params = options.hash;

  Object.keys(params).forEach(function (key) {
    if (key == 'boundOptions') return;

    params[key] = Em.Handlebars.get(self, params[key], options);
  });

  return I18n.t('js.' + property, params);
});
