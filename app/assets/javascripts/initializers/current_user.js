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
