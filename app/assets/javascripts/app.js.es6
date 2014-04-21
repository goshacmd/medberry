import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  rootElement: '#medberry-app',
  modulePrefix: 'app',
  Resolver: Resolver
});

export default App;
