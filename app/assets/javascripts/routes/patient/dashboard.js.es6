import PatientOnlyRoute from 'app/routes/patient_only';

var PatientDashboardRoute = PatientOnlyRoute.extend({
  model: function() {
    return this.modelFor('application');
  },

  activate: function() {
    var self = this;

    this.pusher.bindUser('consultation_started', function(d) { self.send('showConsultation', d); });
  },

  actions: {
    showConsultation: function(data) {
      var self = this;

      this.store.find('consultation', data.consultation).then(function(consultation) {
        self.transitionTo('consultation', consultation);
      });
    }
  }
});

export default PatientDashboardRoute;
