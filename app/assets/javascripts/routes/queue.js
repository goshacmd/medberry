App.QueueRoute = Ember.Route.extend({
  model: function() {
    var isNew = function(request) { return request.get('isNewRequest') };
    return this.store.filter('consultation_request', {}, isNew);
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
