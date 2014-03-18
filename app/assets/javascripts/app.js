//= require moment
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require medlive

window.App = Ember.Application.create();

Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container, application) {
    var store = container.lookup('store:main');
    store.pushPayload('user', currentUser);

    container.register('user:current', store.find('user', currentUser.user.id), { instantiate: false });

    container.injection('route', 'currentUser', 'user:current');
    container.injection('controller', 'currentUser', 'user:current');
  }
});

Ember.Application.initializer({
  name: 'pusher',

  initialize: function(container, application) {
    var pusher = App.Pusher.create({ key: pusherKey, userChannelName: userChannelName });
    container.register('pusher:main', pusher, { instantiate: false });
    container.injection('route', 'pusher', 'pusher:main');
  }
});
