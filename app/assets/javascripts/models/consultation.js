Medlive.Consultation = DS.Model.extend({
  patient: DS.belongsTo('patient'),
  doctor: DS.belongsTo('doctor'),
  cause: DS.attr('string'),
  tokboxSession: DS.attr('string'),
  tokboxToken: DS.attr('string'),
  createdAt: DS.attr('date'),
  expiry: DS.attr('date'),
  status: DS.attr('string'),
  finishedAt: DS.attr('date'),
  finishedByRole: DS.attr('string'),

  isNew: Ember.computed.equal('status', 'new'),
  isFinished: Ember.computed.equal('status', 'finished'),

  finish: function() {
    this.set('status', 'finished');
    return this.save();
  }
});
