//= require moment
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require medlive

window.Medlive = Ember.Application.create();

Ember.Application.initializer({
  name: 'currentUser',

  initialize: function(container, application) {
    var store = container.lookup('store:main');
    var obj = store.load(Medlive.User, currentUser);

    container.register('user:current', Medlive.User.find(obj.id), { instantiate: false });

    container.injection('route', 'currentUser', 'user:current');
    container.injection('controller', 'currentUser', 'user:current');
  }
});
