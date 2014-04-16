var Consultation = DS.Model.extend({
  patient: DS.belongsTo('patient'),
  doctor: DS.belongsTo('doctor'),
  messages: DS.hasMany('message'),
  cause: DS.attr('string'),
  tokboxSession: DS.attr('string'),
  tokboxToken: DS.attr('string'),
  createdAt: DS.attr('date'),
  expiresAt: DS.attr('date'),
  status: DS.attr('string'),
  mode: DS.attr('string'),
  finishedAt: DS.attr('date'),
  finishedBy: DS.attr('string'),
  extension: DS.attr('boolean'),

  isInProgress: Ember.computed.equal('status', 'in_progress'),
  isOver: Ember.computed.equal('status', 'over'),
  isFinished: Ember.computed.equal('status', 'finished'),

  isModeVideo: Ember.computed.equal('mode', 'video'),

  finish: function() {
    this.set('status', 'finished');
    return this.save();
  },

  requestExtension: function() {
    this.set('extension', true);
    return this.save();
  }
});

export default Consultation;
