import PatientOnlyRoute from 'app/routes/patient_only';

var DoctorsIndexRoute = PatientOnlyRoute.extend({
  model: function() {
    return this.modelFor('doctors');
  }
});

export default DoctorsIndexRoute;
