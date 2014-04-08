var DoctorCardController = Ember.ObjectController.extend({
  actions: {
    toggleStar: function() {
      var model = this.get('model');

      model.toggleProperty('favorite');
      model.save();
    },

    showRequestModal: function(doctor) {
      var requestData = { doctor: doctor, cause: null };
      this.send('openModal', 'new_consultation_request', requestData);
    },

    createRequest: function(requestData) {
      var self = this;

      var goToRequest = function(request) {
        self.transitionToRoute('consultation_request', request);
      }

      this.store.createRecord('consultation_request', requestData).save().then(goToRequest);
    }
  }
});

export default DoctorCardController;
