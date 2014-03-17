App.ClockServiceController = Ember.Controller.extend({
  pulse: null,

  init: function() {
    this.tick();
    this._super();
  },

  tick: function() {
    this.notifyPropertyChange('pulse');

    Ember.run.later(this, 'tick', 1000);
  }
});
