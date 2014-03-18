App.DoctorDashboardController = Ember.ArrayController.extend({
  sortProperties: ['createdAt'],

  filteredContent: function() {
    return this.filterBy('status', 'new');
  }.property('arrangedContent'),

  nextRequest: Ember.computed.alias('filteredContent.firstObject')
});
