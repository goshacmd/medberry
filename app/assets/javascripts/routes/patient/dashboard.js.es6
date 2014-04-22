import PatientOnlyRoute from 'app/routes/patient_only';

var PatientDashboardRoute = PatientOnlyRoute.extend({
  model: function() {
    var is = function(property) { return function(record) { return record.get(property) } };

    var favoriteDoctors = this.store.filter('doctor', { favorite: true }, is('favoriteAndAvailable'));
    var consultationRequests = this.store.find('consultation_request');

    return Ember.RSVP.hash({
      favoriteDoctors: favoriteDoctors,
      consultationRequests: consultationRequests
    });
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
