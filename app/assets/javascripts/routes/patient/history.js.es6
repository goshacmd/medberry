import PatientOnlyRoute from 'app/routes/patient_only';

var PatientHistoryRoute = PatientOnlyRoute.extend({
  model: function() {
    return this.store.find('consultation_request');
  }
});

export default PatientHistoryRoute;
