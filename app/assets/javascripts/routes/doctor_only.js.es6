var DoctorOnlyRoute = Ember.Route.extend({
  redirect: function() {
    if (!this.currentUser.get('isDoctor')) {
      this.transitionTo('dashboard');
    }
  }
});

export default DoctorOnlyRoute;
