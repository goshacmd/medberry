Medlive.Consultation = DS.Model.extend({
  patient: DS.belongsTo('Medlive.Patient'),
  doctor: DS.belongsTo('Medlive.Doctor'),
  cause: DS.attr('string')
});
