Medlive.ApplicationRoute = Ember.Route.extend({
  activate: function() {
    var store = this.store;

    channel.bind('requests', function(data) {
      store.push('consultation_request', data);
    });

    channel.bind('consultations', function(data) {
      store.push('consultation', data);
    });
  }
});
