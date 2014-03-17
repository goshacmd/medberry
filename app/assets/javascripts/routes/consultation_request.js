App.ConsultationRequestRoute = Ember.Route.extend({
  enter: function() {
    var self = this;

    var model = this.modelFor('consultation_request').then(function(request) {
      var eventName = 'requests:' + request.get('id');
      channel.bind(eventName, self.showConsultation.bind(self));
    });
  },

  showConsultation: function(data) {
    var self = this;

    this.store.find('consultation', data.consultation).then(function(consultation) {
      self.transitionTo('consultation', consultation);
    });
  }
});
