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
    }
  }
});

export default DoctorCardController;
