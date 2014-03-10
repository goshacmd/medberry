Medlive.ApplicationRoute = Ember.Route.extend({
  enter: function() {
    channel.bind('requests', function(data) {
      Medlive.ConsultationRequest.find();
    });
  }
});
