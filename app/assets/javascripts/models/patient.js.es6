var Patient = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  status: DS.attr('string'),

  isOnline: Ember.computed.equal('status', 'online'),
  isOffline: Ember.computed.equal('status', 'offline'),

  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].join(' ')
  }.property('firstName', 'lastName')
});

export default Patient;
