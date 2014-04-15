var ApplicationRoute = Ember.Route.extend({
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
