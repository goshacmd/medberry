var ConsultationRoute = Ember.Route.extend({
  actions: {
    finish: function() {
      this.currentModel.finish();
    }
  }
});

export default ConsultationRoute;
