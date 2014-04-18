var Router = Ember.Router.extend();

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.route('history');

  this.resource('queue', function() {
    this.route('next');
  });

  this.resource('patient', function() {
    this.route('dashboard');
  });

  this.resource('doctors', function() {
    this.route('family_doctors');
    this.route('pharmacists');
  });

  this.resource('consultation', { path: '/consultations/:consultation_id' }, function() {
    this.route('archive');
  });
});

export default Router;
