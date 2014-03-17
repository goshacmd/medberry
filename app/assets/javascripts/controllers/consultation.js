App.ConsultationController = Ember.ObjectController.extend({
  needs: ['clockService'],

  runTime: function() {
    return (new Date) - this.get('createdAt');
  }.property('createdAt', 'controllers.clockService.pulse'),

  actions: {
    finish: function() {
      this.get('model').finish();
    }
  }
});
