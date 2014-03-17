App.ConsultationController = Ember.ObjectController.extend({
  init: function() {
    this.tick();
    this._super();
  },

  pulse: null,

  tick: function() {
    this.notifyPropertyChange('pulse');

    Ember.run.later(this, 'tick', 1000);
  },

  runTime: function() {
    return (new Date) - this.get('createdAt');
  }.property('createdAt', 'pulse'),

  actions: {
    finish: function() {
      this.get('model').finish();
    }
  }
});
