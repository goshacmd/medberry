Ember.Handlebars.helper('formatTime', function(date) {
  return moment(date).format('h:mm:ss');
});
