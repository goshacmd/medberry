Ember.Handlebars.helper('t', function(property, options) {
  var self = this;
  var params = options.hash;

  return I18n.t('js.' + property, params);
});
