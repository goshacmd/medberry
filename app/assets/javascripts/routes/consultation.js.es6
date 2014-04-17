var ConsultationRoute = Ember.Route.extend({
  activate: function() {
    this.send('hideNav');
  },

  deactivate: function() {
    this.send('showNav');
  },

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
