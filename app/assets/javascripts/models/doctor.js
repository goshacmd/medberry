Medlive.Doctor = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),

  full_name: function() {
    return [this.get('first_name'), this.get('last_name')].join(' ')
  }.property('first_name', 'last_name')
});
