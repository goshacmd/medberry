App.Pusher = Ember.Object.extend({
  key: null,
  userChannelName: null,

  init: function() {
    this._super();

    this.pusher = new Pusher(this.get('key'));
    this.userChannel = this.pusher.subscribe(this.get('userChannelName'));
    this.pulserChannel = this.pusher.subscribe('online_pulser');
  },

  bindUser: function(eventName, handler) {
    this.userChannel.bind(eventName, handler);
  },

  bindPulser: function(eventName, handler) {
    this.pulserChannel.bind(eventName, handler);
  }
});
