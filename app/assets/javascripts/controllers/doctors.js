Medlive.DoctorsController = Ember.ArrayController.extend({
  actions: {
    createRequest: function(doctor) {
      var request = Medlive.ConsultationRequest.createRecord({
        doctor: doctor
      });

      request.save().then(function() {
        alert('request placed');
      });
    }
  }
});
