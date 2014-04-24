var PusherService = Ember.Object.extend({
  store: null,

  key: pusherKey,
  userChannelName: userChannelName,
  pulserChannelName: pulserChannelName,
  encrypted: true,

  connectionFailed: false,

  init: function() {
    this._super();

    this.pusher = new Pusher(this.get('key'), { encrypted: this.get('encrypted') });
    this.pusher.connection.bind('state_change', this.stateChangeHandler.bind(this));

    this.userChannel = this.pusher.subscribe(this.get('userChannelName'));
    this.pulserChannel = this.pusher.subscribe(this.get('pulserChannelName'));

    var self = this;

    [this.userChannel, this.pulserChannel].forEach(function(channel) {
      channel.bind_all(Ember.run.bind(self, self.allHandler));
    });
  },

  stateChangeHandler: function(state) {
    var current = state.current;

    if (current = 'failed') this.set('connectionFailed', true);
  },

  allHandler: function(eventName, data) {
    var parts = eventName.split(':'),
        type = parts[0],
        rest = parts[1];

    if (type == 'data_update') {
      try {
        var name = Ember.Inflector.inflector.singularize(rest);
        this.store.pushPayload(name, data);
      } catch(e) {
      }
    } else if (type == 'pulse') {
      this.pulseHandler(data);
    }
  },

  pulseHandler: function(data) {
    var store = this.store;

    var hasDoctor = function(item) { return store.hasRecordForId('doctor', item.id); };
    var updateDoctor = function(item) { store.update('doctor', item); };

    data.filter(hasDoctor).forEach(updateDoctor);
  },

  bindUser: function(event, handler) {
    this.userChannel.bind(event, Ember.run.bind(this, handler));
  }
});

export default PusherService;
