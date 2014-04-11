import DoctorOnlyRoute from 'app/routes/doctor_only';

var QueueNextRoute = DoctorOnlyRoute.extend({
  redirect: function() {
    this.transitionTo('queue').then(function(transition) {
      transition.send('acceptNext');
    });
  }
});

export default QueueNextRoute;
