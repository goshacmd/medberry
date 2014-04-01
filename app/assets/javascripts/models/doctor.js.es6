var Doctor = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  status: DS.attr('string'),
  practice: DS.attr('string'),
  favorite: DS.attr('boolean'),

  isOnline: Ember.computed.equal('status', 'online'),
  isOffline: Ember.computed.equal('status', 'offline'),

  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].join(' ')
  }.property('firstName', 'lastName'),

  humanPractice: function() {
    return this.get('practice') == 'family' ? 'Family doctor' : 'Pharmacist';
  }.property('practice')
});

export default Doctor;
