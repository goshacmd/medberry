App.User = DS.Model.extend({
  fullName: DS.attr('string'),
  role: DS.attr('string'),

  isDoctor: Ember.computed.equal('role', 'doctor'),
  isPatient: Ember.computed.equal('role', 'patient')
});
