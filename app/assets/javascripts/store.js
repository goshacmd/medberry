Medlive.Store = DS.Store.extend({
  adapter: 'Medlive.ApplicationAdapter'
});

Medlive.ApplicationAdapter = DS.RESTAdapter.extend();
