Ember.Handlebars.helper('date', function(date) {
  return moment(date).format('DD-MM-YYYY');
});
