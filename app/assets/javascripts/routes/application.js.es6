var ApplicationRoute = Ember.Route.extend({
  actions: {
    openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model', model);
      this.render(modalName, { into: 'application', outlet: 'modal' });
    },

    closeModal: function() {
      this.disconnectOutlet({ outlet: 'modal', parentView: 'application' });
    },

    hideNav: function() {
      this.controller.set('showNav', false);
    },

    showNav: function() {
      this.controller.set('showNav', true);
    },

    willTransition: function() {
      this.send('closeModal');
    },

    pusherError: function() {
      this.controller.set('pusherError', true);
    }
  }
});

export default ApplicationRoute;
