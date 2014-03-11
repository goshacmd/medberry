Medlive.DoctorsController = Ember.ArrayController.extend({
  actions: {
    createRequest: function(doctor) {
      var self = this;

      Medlive.ConsultationRequest.createRecord({
        doctor: doctor
      }).save().then(function(request) {
        self.transitionToRoute('consultation_request', request);
      });
    }
  }
});
