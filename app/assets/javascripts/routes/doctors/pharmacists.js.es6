import PatientOnlyRoute from 'app/routes/patient_only';

var PharmacistsRoute = PatientOnlyRoute.extend({
  model: function() {
    return this.modelFor('doctors').filterProperty('practice', 'pharmacist');
  },

  renderTemplate: function(controller) {
    this.render('doctors/index', { controller: controller });
  }
});

export default PharmacistsRoute;
