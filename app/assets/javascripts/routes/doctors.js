App.DoctorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('doctor');
  },

  actions: {
    createRequest: function(doctor) {
      var self = this;

      this.store.createRecord('consultation_request', {
        doctor: doctor
      }).save().then(function(request) {
        self.transitionToRoute('consultation_request', request);
      });
    }
  }
});
