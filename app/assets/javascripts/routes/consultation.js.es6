var ConsultationRoute = Ember.Route.extend({
  actions: {
    finish: function() {
      this.currentModel.finish();
    },

    requestExtension: function() {
      this.currentModel.requestExtension();
    }
  }
});

export default ConsultationRoute;
