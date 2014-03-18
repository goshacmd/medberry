App.DoctorDashboardRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('consultation_request');
  },

  actions: {
    acceptRequest: function(request) {
      var self = this;

      request.accept().then(function() {
        self.transitionTo('consultation', request.get('consultation'));
      });
    },

    declineRequest: function(request) {
      request.decline();
    }
  }
});
