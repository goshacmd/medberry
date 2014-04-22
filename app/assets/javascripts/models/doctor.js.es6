import Identity from 'app/mixins/identity';

var Doctor = DS.Model.extend(Identity, {
  practice: DS.attr('string'),
  favorite: DS.attr('boolean'),
  available: DS.attr('boolean'),

  favoriteAndAvailable: Ember.computed.and('favorite', 'available'),

  humanPractice: function() {
    return this.get('practice') == 'family' ? 'Family doctor' : 'Pharmacist';
  }.property('practice')
});

export default Doctor;
