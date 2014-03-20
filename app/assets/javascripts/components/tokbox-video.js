App.TokboxVideoComponent = Ember.Component.extend({
  sessionId: null,
  token: null,
  streamCounter: 0,
  publisher: null,
  session: null,

  setupEventListeners: function(publisher, session) {
    var self = this;

    var send = function(eventName) {
      var newArguments = [eventName].concat(Array.prototype.slice.call(arguments, 0));
      return function() { self.send.apply(self, newArguments) };
    };

    var listenFor = function(object, eventName) { object.addEventListener(eventName, send(eventName)) };

    var listenTo = function(object, events) {
      events.forEach(function(eventName) {
        listenFor(object, eventName);
      });
    };

    listenTo(publisher, ['accessAllowed', 'accessDenied', 'accessDialogOpened', 'accessDialogClosed']);
    listenTo(session, ['connectionCreated', 'connectionDestroyed', 'sessionConnected', 'sessionDisconnected', 'signal', 'streamCreated', 'streamDestroyed', 'streamPropertyChanged']);
  },

  setupTokbox: function() {
    var apiKey = tokboxApiKey,
        sessionId = this.get('sessionId'),
        token = this.get('token');

    var publisherId = this.elementId + '-publisher';

    this.$().append('<div id="' + publisherId + '"></div>');

    var publisher = this.publisher = TB.initPublisher(apiKey, publisherId);
    var session = this.session = TB.initSession(sessionId);

    this.setupEventListeners(publisher, session);

    session.connect(apiKey, token);
  }.on('didInsertElement'),

  unsubscribeTokbox: function() {
    this.session.disconnect();
  }.on('willDestroyElement'),

  subscribeToStreams: function(streams) {
    for (var i = 0; i < streams.length; i++) {
      var stream = streams[i];
      if (stream.connection.connectionId != this.session.connection.connectionId) {
        var id = this.nextStreamElementId();

        this.$().append('<div id="' + id + '"></div>');
        this.session.subscribe(stream, id);
      }
    }
  },

  nextStreamElementId: function() {
    return this.elementId + '-stream-' + ++this.streamCounter;
  },

  publish: function() {
    this.session.publish(this.publisher);
  },

  actions: {
    accessDenied: function() {
      alert('access to camera was denied, cannot proceed...');
    },

    sessionConnected: function(event) {
      this.subscribeToStreams(event.streams);
      this.publish();
    },

    streamCreated: function(event) {
      this.subscribeToStreams(event.streams);
    }
  }
});
