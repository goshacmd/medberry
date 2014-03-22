var ApplicationRoute = Ember.Route.extend({
  activate: function() {
    var store = this.store;

    var load = function(type) { return function(data) { store.pushPayload(type, data); } };

    this.pusher.bindUser('requests', load('consultation_request'));
    this.pusher.bindUser('consultations', load('consultation'));

    var hasDoctor = function(item) { return store.hasRecordForId('doctor', item.id); };
    var updateDoctor = function(item) { store.update('doctor', item); };

    this.pusher.bindPulser('pulse', function(data) {
      data.filter(hasDoctor).forEach(updateDoctor);
    });
  },

  actions: {
    openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      this.render(modalName, { into: 'application', outlet: 'modal' });
    },

    closeModal: function() {
      this.disconnectOutlet({ outlet: 'modal', parentView: 'application' });
    },

    willTransition: function() {
      this.send('closeModal');
    }
  }
});

export default ApplicationRoute;
