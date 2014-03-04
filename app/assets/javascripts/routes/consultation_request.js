Medlive.ConsultationRequestRoute = Ember.Route.extend({
  enter: function() {
    channel.bind('consultation_started', this.showConsultation.bind(this));
  },

  showConsultation: function(data) {
    if (data.request !== this.currentModel.get('id')) return;

    var self = this;

    this.store.find('consultation', data.consultation).then(function(consultation) {
      self.transitionTo('consultation', consultation);
    });
  }
});
