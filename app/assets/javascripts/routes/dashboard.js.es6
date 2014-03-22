var DashboardRoute = Ember.Route.extend({
  redirect: function() {
    if (this.currentUser.get('isDoctor')) {
      this.transitionTo('queue')
    } else {
      this.transitionTo('patient.dashboard')
    }
  },
});

export default DashboardRoute;
