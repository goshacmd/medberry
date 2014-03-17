App.DoctorDashboardController = Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: false,

  actions: {
    acceptRequest: function(request) {
      var self = this;

      request.accept().then(function() {
        self.transitionToRoute('consultation', request.get('consultation'));
      });
    },

    declineRequest: function(request) {
      request.decline();
    }
  }
});
