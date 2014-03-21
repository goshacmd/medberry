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

  computeOptimalMateVideoSize: function() {
    var vpWidth = this.$().width();
    var vpHeight = $(window).height() - this.$().offset().top - 100;

    var vpCandidate1 = { width: vpWidth, height: vpWidth * 3 / 4 };
    var vpCandidate2 = { height: vpHeight, width: vpHeight * 4 / 3 };

    return vpCandidate1.height > vpHeight ? vpCandidate2 : vpCandidate1;
  },

  setMateSize: function(size) {
    var mate$ = this.$('#video-mate');

    this.mateWidth = size.width;
    this.mateHeight = size.height;

    mate$.css(size);
  },

  setSelfSize: function(size) {
    var self$ = this.$('#video-self');

    this.selfWidth = size.width;
    this.selfHeight = size.height;

    self$.css(size);
  },

  setVideoSizes: function() {
    var mateSize = this.computeOptimalMateVideoSize();
    this.setMateSize(mateSize);

    var self$ = this.$('#video-self');

    var selfSize = { width: 264, height: 198 };
    this.setSelfSize(selfSize);
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
