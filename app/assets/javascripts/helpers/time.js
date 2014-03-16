Ember.Handlebars.helper('time', function(diff) {
  return moment(diff).format('mm:ss');
});
