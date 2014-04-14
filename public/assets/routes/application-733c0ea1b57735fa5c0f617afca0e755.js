define("app/routes/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationRoute = Ember.Route.extend({
      actions: {
        openModal: function(modalName, model) {
          this.controllerFor(modalName).set('model', model);
          this.render(modalName, { into: 'application', outlet: 'modal' });
        },

        closeModal: function() {
          this.disconnectOutlet({ outlet: 'modal', parentView: 'application' });
        },

        createRequest: function(requestData) {
          var self = this;

          var goToRequest = function(request) {
            self.transitionTo('patient.dashboard');
            self.send('closeModal');
          }

          this.store.createRecord('consultation_request', requestData).save().then(goToRequest);
        },

        willTransition: function() {
          this.send('closeModal');
        }
      }
    });

    __exports__["default"] = ApplicationRoute;
  });