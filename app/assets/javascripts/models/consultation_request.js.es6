var ConsultationRequest = DS.Model.extend({
  patient: DS.belongsTo('patient'),
  doctor: DS.belongsTo('doctor'),
  consultation: DS.belongsTo('consultation'),
  queueMeta: DS.belongsTo('consultation_request_queue_meta'),

  cause: DS.attr('string'),
  status: DS.attr('string'),
  cancelationCause: DS.attr('string'),
  createdAt: DS.attr('date'),
  canceledAt: DS.attr('date'),

  isNewRequest: Ember.computed.equal('status', 'new'),
  isAccepted: Ember.computed.equal('status', 'accepted'),
  isDeclined: Ember.computed.equal('status', 'declined'),
  isCanceled: Ember.computed.equal('status', 'canceled'),

  canceledDoctorOffline: Ember.computed.equal('cancelationCause', 'doctor_offline'),
  canceledPatientOffline: Ember.computed.equal('cancelationCause', 'patient_offline'),

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
