import Identity from 'app/mixins/identity';

var Doctor = DS.Model.extend(Identity, {
  practice: DS.attr('string'),
  favorite: DS.attr('boolean'),

  humanPractice: function() {
    return this.get('practice') == 'family' ? 'Family doctor' : 'Pharmacist';
  }.property('practice')
});

export default Doctor;
