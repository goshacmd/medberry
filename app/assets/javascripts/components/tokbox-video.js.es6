var makeHandlers = function(self, eventNames) {
  var handlers = {};

  eventNames.forEach(function(eventName) {
    handlers[eventName] = function(event) {
      Ember.run(function() {
        self.handleTokboxAction(eventName, event);
      });
    };
  });

  return handlers;
};

var getSize = function(el$) {
  return { width: el$.width(), height: el$.height() };
};

var multiplySize = function(size, mul) {
  return { width: size.width * mul, height: size.height * mul };
};

var publisherEvents = ['accessAllowed', 'accessDenied', 'accessDialogOpened', 'accessDialogClosed'];
var sessionEvents = ['connectionCreated', 'connectionDestroyed', 'sessionConnected', 'sessionDisconnected', 'signal', 'streamCreated', 'streamDestroyed', 'streamPropertyChanged'];

var selfId = 'video-self';
var selfSel = '#video-self';
var mateId = 'video-mate';
var mateSel = '#video-mate';

var TokboxVideoComponent = Ember.Component.extend({
  sessionId: null, // tokbox session id
  token: null, // tokbox token
  publisher: null, // TB.Publisher
  session: null, // TB.Session
  cameraAccessError: null, // was there an error?
  size: null, // video size ({ width: X, height: Y })
  selfPosition: 4, // 1 - top left, 2 - top right, 3 - bottom left, 4 - bottom right

  mateStreamId: null, // id of mate stream

  mate$: function() {
    return this.$(mateSel);
  },

  self$: function() {
    return this.$(selfSel);
  },

  v$: function() {
    return this.$('.videos');
  },

  setupEventListeners: function() {
    this.publisher.on(makeHandlers(this, publisherEvents));
    this.session.on(makeHandlers(this, sessionEvents));
  },

  teardownEventListeners: function() {
    this.publisher.off(publisherEvents);
    this.session.off(sessionEvents);
  },

  setupTokbox: function() {
    var apiKey = tokboxApiKey,
        sessionId = this.get('sessionId'),
        token = this.get('token');

    this.setAndPositionVideos();

    this.publisher = TB.initPublisher(apiKey, selfId);
    this.session = TB.initSession(sessionId);

    this.setupEventListeners();

    this.session.connect(apiKey, token);
  }.on('didInsertElement'),

  mateVideoSize: Ember.computed.alias('size'),

  selfVideoSize: function() {
    return multiplySize(this.get('mateVideoSize'), 1/3);
  }.property('mateVideoSize'),

  setVideoSizes: function() {
    var mateSize = this.get('mateVideoSize'),
        selfSize = this.get('selfVideoSize');

    this.v$().css(mateSize);

    this.mate$().css(mateSize);
    this.self$().css(selfSize);
  }.observes('mateVideoSize', 'selfVideoSize'),

  selfVideoPosition: function() {
    var pos = parseInt(this.get('selfPosition')),
        mateSize = this.get('mateVideoSize'),
        selfSize = this.get('selfVideoSize');

    var k = 20;

    var left = pos == 1 || pos == 3 ? k : mateSize.width - selfSize.width - k;
    var top = pos == 1 || pos == 2 ? k : mateSize.height - selfSize.height - k;

    return { left: left, top: top };
  }.property('selfPosition', 'mateVideoSize', 'selfVideoSize'),

  mateVideoPosition: function() {
    var selfSize = this.get('selfVideoSize');
    return { top: -selfSize.height };
  }.property('selfVideoSize'),

  positionVideoContainer: function() {
    var v$ = this.v$();
    var size = this.get('size');

    v$.css({ position: 'relative' });

    var vPosition = { left: (this.$().width() - v$.width()) / 2 };
    v$.css(vPosition);
  }.observes('size'),

  positionVideoElements: function() {
    var mate$ = this.mate$();
    var self$ = this.self$();

    mate$.css({ position: 'relative' });
    self$.css({ position: 'relative', 'z-index': 100 });

    var matePosition = this.get('mateVideoPosition');
    var selfPosition = this.get('selfVideoPosition');

    mate$.css(matePosition);
    self$.css(selfPosition);
  }.observes('mateVideoPosition', 'selfVideoPosition'),

  setAndPositionVideos: function() {
    this.setVideoSizes();
    this.positionVideoContainer();
    this.positionVideoElements();
  },

  unsubscribeTokbox: function() {
    this.teardownEventListeners();
    this.publisher.destroy();
    this.session.disconnect();
  }.on('willDestroyElement'),

  subscribeToStreams: function(streams) {
    var selfConnectionId = this.session.connection.connectionId;

    var notOwnStream = function(stream) {
      return stream.connection.connectionId != selfConnectionId;
    };

    var mateStream = this.session.streams.find(notOwnStream);

    if (mateStream && this.mateStreamId != mateStream.streamId) {
      var mateSize = getSize(this.mate$());
      this.session.subscribe(mateStream, mateId, mateSize);
    }
  },

  publish: function() {
    this.session.publish(this.publisher);
  },

  handleTokboxAction: function(eventName, event) {
    this.send(eventName, event);
  },

  actions: {
    accessDenied: function() {
      this.set('cameraAccessError', true);
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

export default TokboxVideoComponent;
