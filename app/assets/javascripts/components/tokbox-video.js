Medlive.TokboxVideoComponent = Ember.Component.extend({
  sessionId: null,
  token: null,

  setupTokbox: function() {
    var apiKey = tokboxApiKey,
        sessionId = this.get('sessionId'),
        token = this.get('token');

    var publisherId = this.elementId + '-publisher',
        streamId = this.elementId + '-stream-';

    this.$().append('<div id="' + publisherId + '"></div>');

    var publisher = this.publisher = TB.initPublisher(apiKey, publisherId);
    var session = this.session = TB.initSession(sessionId);

    var streamCounter = 0;

    publisher.addEventListener('accessDenied', function() {
      alert('access to camera was denied, cannot proceed...');
    });

    session.connect(apiKey, token);

    var self = this;

    var subscribeToStreams = function(streams) {
      for (var i = 0; i < streams.length; i++) {
        var stream = streams[i];
        if (stream.connection.connectionId != session.connection.connectionId) {
          streamCounter++;

          self.$().append('<div id="' + streamId + streamCounter + '"></div>');
          session.subscribe(stream, streamId + streamCounter);
        }
      }
    };

    session.addEventListener('sessionConnected', function(event) {
      subscribeToStreams(event.streams);
      session.publish(publisher);
    });

    session.addEventListener('streamCreated', function(event) {
      subscribeToStreams(event.streams);
    });
  }.on('didInsertElement'),

  unsubscribeTokbox: function() {
    this.session.disconnect();
  }.on('willDestroyElement')
});
