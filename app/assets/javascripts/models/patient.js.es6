import Identity from 'app/mixins/identity';

var Patient = DS.Model.extend(Identity, {
  dob: DS.attr('date'),
  city: DS.attr('string')
});

export default Patient;
