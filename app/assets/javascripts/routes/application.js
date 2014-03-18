App.ApplicationRoute = Ember.Route.extend({
  activate: function() {
    var store = this.store;

    var load = function(type) { return function(data) { store.pushPayload(type, data); } };

    userChannel.bind('requests', load('consultation_request'));
    userChannel.bind('consultations', load('consultation'));

    var hasDoctor = function(item) { return store.hasRecordForId('doctor', item.id); };
    var updateDoctor = function(item) { store.update('doctor', item); };

    pulserChannel.bind('pulse', function(data) {
      data.filter(hasDoctor).forEach(updateDoctor);
    });
  }
});
