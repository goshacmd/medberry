App.TokboxVideoComponent = Ember.Component.extend({
  sessionId: null,
  token: null,
  publisher: null,
  session: null,

  mateStreamId: null,

  setupEventListeners: function(publisher, session) {
    var self = this;
    var send = function(eventName) {
      return function() {
        var newArguments = [eventName].concat(Array.prototype.slice.call(arguments, 0));
        self.send.apply(self, newArguments)
      };
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

    var publisher = this.publisher = TB.initPublisher(apiKey, 'video-self');
    var session = this.session = TB.initSession(sessionId);

    this.setupEventListeners(publisher, session);

    session.connect(apiKey, token);
  }.on('didInsertElement'),

  unsubscribeTokbox: function() {
    this.session.disconnect();
  }.on('willDestroyElement'),

  subscribeToStreams: function(streams) {
    var self = this;

    var mateStream = this.session.streams.find(function(stream) {
      return (stream.connection.connectionId != self.session.connection.connectionId);
    });

    if (mateStream && this.mateStreamId != mateStream.streamId) {
      this.session.subscribe(mateStream, 'video-mate');
    }
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
