App.Patient = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].join(' ')
  }.property('firstName', 'lastName')
});
