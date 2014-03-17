App.Router.map(function() {
  this.route('dashboard', { path: '/' });

  this.resource('doctor', function() {
    this.route('dashboard');
  });

  this.resource('patient', function() {
    this.route('dashboard');
  });

  this.resource('doctors');
  this.resource('consultation_request', { path: '/requests/:consultation_request_id' });
  this.resource('consultation', { path: '/consults/:consultation_id' });
});
