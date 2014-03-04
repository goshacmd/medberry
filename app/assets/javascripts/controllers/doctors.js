Medlive.DoctorsController = Ember.ArrayController.extend({
  actions: {
    createRequest: function(doctor) {
      var self = this;

      var request = Medlive.ConsultationRequest.createRecord({
        doctor: doctor
      });

      request.save().then(function() {
        self.transitionToRoute('consultation_request', request);
      });
    }
  }
});
