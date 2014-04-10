var Router = Ember.Router.extend();

Router.map(function() {
  this.route('dashboard', { path: '/' });

  this.resource('queue');

  this.resource('patient', function() {
    this.route('dashboard');
    this.route('history');
  });

  this.resource('doctors', function() {
    this.route('family_doctors');
    this.route('pharmacists');
  });

  this.resource('consultation_request', { path: '/requests/:consultation_request_id' });
  this.resource('consultation', { path: '/consults/:consultation_id' });
});

export default Router;
