var ConsultationRoute = Ember.Route.extend({
  actions: {
    finish: function() {
      this.currentModel.finish();
    },

    toggleVideoMode: function() {
      var current = this.currentModel.get('mode');
      var next = current == 'video' ? 'text' : 'video';
      this.currentModel.set('mode', next).save();
    },

    requestExtension: function() {
      this.currentModel.requestExtension();
    }
  }
});

export default ConsultationRoute;
