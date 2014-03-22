var DoctorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('doctor');
  },

  actions: {
    showRequestModal: function(doctor) {
      var requestData = { doctor: doctor, cause: null };
      this.send('openModal', 'new_consultation_request', requestData);
    },

    createRequest: function(requestData) {
      var self = this;

      var goToRequest = function(request) {
        self.transitionTo('consultation_request', request);
      }

      this.store.createRecord('consultation_request', requestData).save().then(goToRequest);
    }
  }
});

export default DoctorsRoute;
