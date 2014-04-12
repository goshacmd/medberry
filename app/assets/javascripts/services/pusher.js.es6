var PusherService = Ember.Object.extend({
  store: null,

  key: pusherKey,
  userChannelName: userChannelName,
  pulserChannelName: pulserChannelName,

  init: function() {
    this._super();

    this.pusher = new Pusher(this.get('key'));
    this.userChannel = this.pusher.subscribe(this.get('userChannelName'));
    this.pulserChannel = this.pusher.subscribe(this.get('pulserChannelName'));

    this.bindAllUser(this.allHandler.bind(this));
    this.bindPulser('pulse', this.pulseHandler.bind(this));
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
    }
  },

  pulseHandler: function(data) {
    var store = this.store;

    var hasDoctor = function(item) { return store.hasRecordForId('doctor', item.id); };
    var updateDoctor = function(item) { store.update('doctor', item); };

    data.filter(hasDoctor).forEach(updateDoctor);
  },

  bindAllUser: function(handler) {
    this.userChannel.bind_all(handler);
  },

  bindUser: function(eventName, handler) {
    this.userChannel.bind(eventName, handler);
  },

  bindPulser: function(eventName, handler) {
    this.pulserChannel.bind(eventName, handler);
  }
});

export default PusherService;
