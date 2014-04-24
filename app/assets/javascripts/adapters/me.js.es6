import ApplicationAdapter from 'app/adapters/application';

var MeAdapter = ApplicationAdapter.extend({
  buildURL: function() {
    return '/' + this.namespace + '/me.json';
  }
});

export default MeAdapter;
