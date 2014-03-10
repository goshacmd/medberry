Medlive.ConsultationRequestRoute = Ember.Route.extend({
  enter: function() {
    var eventName = 'requests:' + this.currentModel.get('id');
    channel.bind(eventName, this.showConsultation.bind(this));
  },

  showConsultation: function(data) {
    this.store.find('consultation', data.consultation).then(function(consultation) {
      this.transitionTo('consultation', consultation);
    }.bind(this));
  }
});
