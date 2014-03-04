Medlive.ConsultationRequest = DS.Model.extend({
  patient: DS.belongsTo('Medlive.Patient'),
  doctor: DS.belongsTo('Medlive.Doctor'),
  cause: DS.attr('string'),
  status: DS.attr('string')
});
