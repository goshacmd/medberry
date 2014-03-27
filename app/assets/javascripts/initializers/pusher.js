Ember.Application.initializer({
  name: 'pusher',

  initialize: function(container, application) {
    var pusher = require('app/services/pusher').default.create({
      key: pusherKey, userChannelName: userChannelName, pulserChannelName: pulserChannelName
    });

    container.register('pusher:main', pusher, { instantiate: false });
    container.injection('route', 'pusher', 'pusher:main');
  }
});
