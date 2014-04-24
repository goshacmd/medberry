var PatientDashboardController = Ember.ObjectController.extend({
  lastRequestNew: Ember.computed.alias('lastConsultationRequest.isNewRequest'),
  lastRequestCanceled: Ember.computed.alias('lastConsulationRequest.isCanceled'),

  showLastRequest: Ember.computed.or('lastRequestNew', 'lastRequestCanceled')
});

export default PatientDashboardController;
