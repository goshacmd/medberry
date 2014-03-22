var ConsultationRequest = DS.Model.extend({
  patient: DS.belongsTo('patient'),
  doctor: DS.belongsTo('doctor'),
  consultation: DS.belongsTo('consultation'),
  cause: DS.attr('string'),
  status: DS.attr('string'),
  createdAt: DS.attr('date'),

  isNewRequest: Ember.computed.equal('status', 'new'),

  accept: function() {
    this.set('status', 'accepted');
    return this.save();
  },

  decline: function() {
    this.set('status', 'declined');
    return this.save();
  }
});

export default ConsultationRequest;
