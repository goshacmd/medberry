App.ConsultationRequestRoute = Ember.Route.extend({
  afterModel: function(request) {
    var self = this;

    var id = request.get('id');
    var eventName = 'requests:' + id;

    this.pusher.bindUser(eventName, function(d) { self.send('showConsultation', d); });
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
