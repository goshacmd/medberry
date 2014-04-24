var Me = DS.Model.extend({
  favoriteDoctors: DS.hasMany('doctor'),
  lastConsultationRequest: DS.belongsTo('consultation_request')
});

export default Me;
