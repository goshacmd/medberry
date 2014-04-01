import PatientOnlyRoute from 'app/routes/patient_only';

var FamilyDoctorsRoute = PatientOnlyRoute.extend({
  model: function() {
    return this.modelFor('doctors').filterProperty('practice', 'family');
  },

  renderTemplate: function(controller) {
    this.render('doctors/index', { controller: controller });
  }
});

export default FamilyDoctorsRoute;
