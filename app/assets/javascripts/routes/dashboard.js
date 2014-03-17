App.DashboardRoute = Ember.Route.extend({
  redirect: function() {
    if (this.currentUser.get('isDoctor')) {
      this.transitionTo('doctor.dashboard')
    } else {
      this.transitionTo('patient.dashboard')
    }
  },
});
