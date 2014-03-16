Medlive.ApplicationRoute = Ember.Route.extend({
  activate: function() {
    var store = this.store;

    var load = function(type) { return function(data) { store.pushPayload(type, data); } };

    channel.bind('requests', load('consultation_request'));
    channel.bind('consultations', load('consultation'));
  }
});
