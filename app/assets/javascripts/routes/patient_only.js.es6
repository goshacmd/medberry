var PatientOnlyRoute = Ember.Route.extend({
  redirect: function() {
    if (!this.currentUser.get('isPatient')) {
      this.transitionTo('dashboard');
    }
  }
});

export default PatientOnlyRoute;
