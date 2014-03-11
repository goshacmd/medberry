Medlive.Consultation = DS.Model.extend({
  patient: DS.belongsTo('Medlive.Patient'),
  doctor: DS.belongsTo('Medlive.Doctor'),
  cause: DS.attr('string'),
  tokboxSession: DS.attr('string'),
  tokboxToken: DS.attr('string'),
  createdAt: DS.attr('date'),
  expiry: DS.attr('date')
});
