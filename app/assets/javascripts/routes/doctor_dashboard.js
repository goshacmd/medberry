App.DoctorDashboardRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('consultation_request');
  },

  actions: {
    acceptNext: function() {
      var self = this;

      var goToConsultation = function(request) {
        self.transitionTo('consultation', request.get('consultation'));
      };

      this.controller.get('nextRequest').accept().then(goToConsultation);
    }
  }
});
