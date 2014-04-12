var Message = DS.Model.extend({
  consultation: DS.belongsTo('consultation'),
  senderRole: DS.attr('string'),
  text: DS.attr('string'),
  createdAt: DS.attr('date'),

  isSentByDoctor: Ember.computed.equal('senderRole', 'doctor'),
  isSentByPatient: Ember.computed.equal('senderRole', 'patient')
});

export default Message;
