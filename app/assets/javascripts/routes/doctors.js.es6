import PatientOnlyRoute from 'app/routes/patient_only';

var DoctorsRoute = PatientOnlyRoute.extend({
  model: function() {
    return this.store.find('doctor');
  }
});

export default DoctorsRoute;
