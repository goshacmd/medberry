Medlive.ConsultationRequest = DS.Model.extend({
  patient: DS.belongsTo('Medlive.Patient'),
  doctor: DS.belongsTo('Medlive.Doctor'),
  consultation: DS.belongsTo('Medlive.Consultation'),
  cause: DS.attr('string'),
  status: DS.attr('string'),
  createdAt: DS.attr('date'),

  isNew: Ember.computed.equal('status', 'new'),

  accept: function() {
    this.set('status', 'accepted');
    return this.save();
  },

  decline: function() {
    this.set('status', 'declined');
    return this.save();
  }
});
