Medlive.DoctorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('doctor');
  }
});
