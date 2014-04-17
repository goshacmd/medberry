var items = function(self, list) {
  return list.map(function(item) {
    return self.get(item + 'Item');
  });
};

var NavController = Ember.Controller.extend({
  needs: ['queue'],

  queueBadge: Ember.computed.alias('controllers.queue.length'),

  queueItem: function() {
    return { route: 'queue', title: 'nav.queue', badge: this.get('queueBadge') };
  }.property('queueBadge'),

  historyItem: { route: 'history', title: 'nav.history' },
  doctorsItem: { route: 'doctors', title: 'nav.doctors' },
  patientDashboardItem: { route: 'patient.dashboard', title: 'nav.dashboard' },

  items: function() {
    if (this.get('currentUser.isDoctor')) {
      return items(this, ['queue', 'history']);
    } else {
      return items(this, ['patientDashboard', 'history', 'doctors']);
    }
  }.property('currentUser.isDoctor', 'queueItem', 'historyItem', 'doctorsItem', 'patientDashboardItem')
});

export default NavController;
