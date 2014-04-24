define("app/routes/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationRoute = Ember.Route.extend({
      model: function() {
        return this.store.find('me', 'me');
      },

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

    __exports__["default"] = ApplicationRoute;
  });