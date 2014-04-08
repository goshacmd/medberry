import PatientOnlyRoute from 'app/routes/patient_only';

var PatientDashboardRoute = PatientOnlyRoute.extend({
  model: function() {
    var isFavorite = function(doc) { return doc.get('favorite') };

    var favoriteDoctors = this.store.filter('doctor', { favorite: true }, isFavorite);

    return Ember.RSVP.hash({
      favoriteDoctors: favoriteDoctors
    });
  }
});

export default PatientDashboardRoute;
