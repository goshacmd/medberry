App.DoctorDashboardController = Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  nextRequest: Ember.computed.alias('arrangedContent.firstObject')
});
