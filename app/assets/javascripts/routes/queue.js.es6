import DoctorOnlyRoute from 'app/routes/doctor_only';

var QueueRoute = DoctorOnlyRoute.extend({
  model: function() {
    var isNew = function(request) { return request.get('isNewRequest') };
    return this.store.filter('consultation_request', { status: 'new' }, isNew);
  },

  actions: {
    acceptNext: function() {
      var self = this;
      var nextRequest = this.controller.get('nextRequest');

      if (!nextRequest) return;

      var goToConsultation = function(request) {
        self.transitionTo('consultation', request.get('consultation'));
      };

      nextRequest.accept().then(goToConsultation);
    }
  }
});

export default QueueRoute;
