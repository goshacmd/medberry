var PatientDashboardController = Ember.ObjectController.extend({
  sortedConsultationRequests: function() {
    return this.get('consultationRequests').sortBy('createdAt');
  }.property('consultationRequests.@each.createdAt'),

  lastConsultationRequest: Ember.computed.alias('sortedConsultationRequests.lastObject'),

  lastRequestNew: Ember.computed.alias('lastConsultationRequest.isNewRequest'),
  lastRequestCanceled: Ember.computed.alias('lastConsulationRequest.isCanceled'),

  showLastRequest: Ember.computed.or('lastRequestNew', 'lastRequestCanceled')
});

export default PatientDashboardController;
