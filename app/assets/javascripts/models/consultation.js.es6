import DC  from 'app/models/diagnosis_category';

var Consultation = DS.Model.extend({
  patient: DS.belongsTo('patient'),
  doctor: DS.belongsTo('doctor'),
  messages: DS.hasMany('message'),
  causeCategoryId: DS.attr('string'),
  tokboxSession: DS.attr('string'),
  tokboxToken: DS.attr('string'),
  createdAt: DS.attr('date'),
  expiresAt: DS.attr('date'),
  status: DS.attr('string'),
  mode: DS.attr('string'),
  finishedAt: DS.attr('date'),
  finishedBy: DS.attr('string'),
  duration: DS.attr('number'),
  extension: DS.attr('boolean'),
  diagnosisCategoryId: DS.attr('string'),
  advice: DS.attr('string'),

  causeCategory: function() {
    return DC.FIXTURES.findBy('slug', this.get('causeCategoryId'));
  }.property('causeCategoryId'),

  diagnosisCategory: function() {
    return DC.FIXTURES.findBy('slug', this.get('diagnosisCategoryId'));
  }.property('diagnosisCategoryId'),

  isInProgress: Ember.computed.equal('status', 'in_progress'),
  isOver: Ember.computed.equal('status', 'over'),
  isFinished: Ember.computed.equal('status', 'finished'),

  isModeVideo: Ember.computed.equal('mode', 'video'),

  durationMs: function() {
    return this.get('duration') * 1000;
  }.property('duration'),

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
