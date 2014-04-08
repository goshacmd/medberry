var PatientDashboardController = Ember.ObjectController.extend({
  sortedConsultationRequests: function() {
    return this.get('consultationRequests').sortBy('createdAt');
  }.property('consultationRequests.@each.createdAt'),

  lastConsultationRequest: Ember.computed.alias('sortedConsultationRequests.lastObject'),

  showLastRequest: Ember.computed.alias('lastConsultationRequest.isNewRequest')
});

export default PatientDashboardController;
