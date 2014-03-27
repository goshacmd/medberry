var PusherService = Ember.Object.extend({
  key: null,
  userChannelName: null,
  pulserChannelName: null,

  init: function() {
    this._super();

    this.pusher = new Pusher(this.get('key'));
    this.userChannel = this.pusher.subscribe(this.get('userChannelName'));
    this.pulserChannel = this.pusher.subscribe(this.get('pulserChannelName'));
  },

  bindUser: function(eventName, handler) {
    this.userChannel.bind(eventName, handler);
  },

  bindPulser: function(eventName, handler) {
    this.pulserChannel.bind(eventName, handler);
  }
});

export default PusherService;
