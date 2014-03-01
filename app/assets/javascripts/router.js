Medlive.Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.resource('doctors');
});
