var send = function(self, eventName) {
  return function() {
    var newArguments = [eventName].concat(Array.prototype.slice.call(arguments, 0));
    Ember.run(function() {
      self.send.apply(self, newArguments)
    });
  };
};

var listenFor = function(object, self, eventName) {
  object.addEventListener(eventName, send(self, eventName))
};

var listenTo = function(object, self, events) {
  events.forEach(function(eventName) {
    listenFor(object, self, eventName);
  });
};

var getSize = function(el$) {
  return { width: el$.width(), height: el$.heigh() };
}

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
    listenTo(this.publisher, this, publisherEvents);
    listenTo(this.session, this, sessionEvents);
  },

  bindResize: function() {
    var self = this;

    this.resizeHandler = function() {
      Ember.run(function() { self.setAndPositionVideos(); });
    };

    $(window).bind('resize', this.resizeHandler);
  },

  unbindResize: function() {
    $(window).unbind('resize', this.resizeHandler);
  },

  setupTokbox: function() {
    var apiKey = tokboxApiKey,
        sessionId = this.get('sessionId'),
        token = this.get('token');

    this.bindResize();
    this.setAndPositionVideos();

    this.publisher = TB.initPublisher(apiKey, selfId);
    this.session = TB.initSession(sessionId);

    this.setupEventListeners();

    this.session.connect(apiKey, token);
  }.on('didInsertElement'),

  computeOptimalMateVideoSize: function() {
    var vpWidth = this.$().width();
    var vpHeight = $(window).height() - this.$().offset().top - 100;

    var vpCandidate1 = { width: vpWidth, height: vpWidth * 3 / 4 };
    var vpCandidate2 = { height: vpHeight, width: vpHeight * 4 / 3 };

    return vpCandidate1.height > vpHeight ? vpCandidate2 : vpCandidate1;
  },

  computeOptimalSelfVideoSize: function() {
    var mateSize = this.computeOptimalMateVideoSize();
    var mWidth = mateSize.width,
        mHeight = mateSize.height;

    return { width: mWidth / 3, height: mHeight / 3 };
  },

  setMateSize: function(size) {
    this.mate$().css(size);
  },

  setSelfSize: function(size) {
    this.self$().css(size);
  },

  getMateSize: function() {
    return getSize(this.mate$());
  },

  setVideoSizes: function() {
    var mateSize = this.computeOptimalMateVideoSize();
    this.setMateSize(mateSize);

    var selfSize = this.computeOptimalSelfVideoSize();
    this.setSelfSize(selfSize);

    this.v$().css(mateSize);
  },

  computeSelfVideoPosition: function() {
    var pos = parseInt(this.get('selfPosition'));

    var mate$ = this.mate$();
    var self$ = this.self$();
    var k = 20;

    var left = pos == 1 || pos == 3 ? k : mate$.width() - self$.width() - k;
    var top = pos == 1 || pos == 2 ? k : mate$.height() - self$.height() - k;

    return { left: left, top: top };
  },

  computeMateVideoPosition: function() {
    return { top: -this.self$().height() };
  },

  positionVideoContainer: function() {
    var v$ = this.v$();

    v$.css({ position: 'relative' });

    var vPosition = { left: (this.$().width() - v$.width()) / 2 };
    v$.css(vPosition);
  },

  positionVideoElements: function() {
    var mate$ = this.mate$();
    var self$ = this.self$();

    mate$.css({ position: 'relative' });
    self$.css({ position: 'relative', 'z-index': 100 });

    var matePosition = this.computeMateVideoPosition();
    var selfPosition = this.computeSelfVideoPosition();

    mate$.css(matePosition);
    self$.css(selfPosition);
  },

  setAndPositionVideos: function() {
    this.setVideoSizes();
    this.positionVideoContainer();
    this.positionVideoElements();
  },

  unsubscribeTokbox: function() {
    this.unbindResize();
    this.session.disconnect();
  }.on('willDestroyElement'),

  subscribeToStreams: function(streams) {
    var selfConnectionId = this.session.connection.connectionId;

    var notOwnStream = function(stream) {
      return stream.connection.connectionId != selfConnectionId;
    };

    var mateStream = this.session.streams.find(notOwnStream);

    if (mateStream && this.mateStreamId != mateStream.streamId) {
      this.session.subscribe(mateStream, mateId, this.getMateSize());
    }
  },

  publish: function() {
    this.session.publish(this.publisher);
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
