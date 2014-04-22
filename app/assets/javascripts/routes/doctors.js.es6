import PatientOnlyRoute from 'app/routes/patient_only';

var DoctorsRoute = PatientOnlyRoute.extend({
  model: function() {
    return this.store.filter('doctor', {}, function(d) { return d.get('available') });
  }
});

export default DoctorsRoute;
