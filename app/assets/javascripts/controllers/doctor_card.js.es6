var DoctorCardController = Ember.ObjectController.extend({
  thing: 'a',
  actions: {
    toggleStar: function() {
      var model = this.get('model');

      model.toggleProperty('favorite');
      model.save();
    }
  }
});

export default DoctorCardController;
