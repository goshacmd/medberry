Ember.Application.initializer({
  name: 'pusher',

  initialize: function(container, application) {
    var pusher = require('app/services/pusher').default;

    container.register('pusher:main', pusher);
    container.injection('route', 'pusher', 'pusher:main');
    container.injection('pusher:main', 'store', 'store:main');
  }
});
