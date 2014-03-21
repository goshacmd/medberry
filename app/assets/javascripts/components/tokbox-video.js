App.TokboxVideoComponent = Ember.Component.extend({
  sessionId: null,
  token: null,
  publisher: null,
  session: null,
  cameraAccessError: null,

  mateStreamId: null,

  setupEventListeners: function(publisher, session) {
    var self = this;

    var send = function(eventName) {
      return function() {
        var newArguments = [eventName].concat(Array.prototype.slice.call(arguments, 0));
        Ember.run(function() {
          self.send.apply(self, newArguments)
        });
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

    this.setVideoSizes();
    this.positionVideoElements();

    var publisher = this.publisher = TB.initPublisher(apiKey, 'video-self');
    var session = this.session = TB.initSession(sessionId);

    this.setupEventListeners(publisher, session);

    session.connect(apiKey, token);
  }.on('didInsertElement'),

  setVideoSizes: function() {
    var mate$ = this.$('#video-mate');
    var mateWidth = this.mateWidth = mate$.width();
    var mateHeight = this.mateHeight = mateWidth * 3 / 4;

    mate$.width(mateWidth);
    mate$.height(mateHeight);

    var self$ = this.$('#video-self');
    var selfWidth = this.selfWidth = 264;
    var selfHeight = this.selfHeight = 198;

    self$.width(selfWidth);
    self$.height(selfHeight);
  },

  positionVideoElements: function() {
    var mate$ = this.$('#video-mate');
    var mateWidth = mate$.width();
    var mateHeight = mate$.height();

    var self$ = this.$('#video-self');
    var selfWidth = self$.width();
    var selfHeight = self$.height();

    mate$.css({ position: 'relative', top: -selfHeight });
    self$.css({ position: 'relative', left: mateWidth - selfWidth - 20, top: mateHeight - selfHeight - 20, 'z-index': 100 });
  },

  unsubscribeTokbox: function() {
    this.session.disconnect();
  }.on('willDestroyElement'),

  subscribeToStreams: function(streams) {
    var self = this;

    var mateStream = this.session.streams.find(function(stream) {
      return (stream.connection.connectionId != self.session.connection.connectionId);
    });

    if (mateStream && this.mateStreamId != mateStream.streamId) {
      this.session.subscribe(mateStream, 'video-mate', {
        width: this.mateWidth, height: this.mateHeight
      });
    }
  },

  publish: function() {
    this.session.publish(this.publisher);
  },

  actions: {
    accessDenied: function() {
      //this.set('cameraAccessError', true);
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
