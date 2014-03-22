var ConsultationController = Ember.ObjectController.extend({
  needs: ['clockService'],

  runTime: function() {
    return (new Date) - this.get('createdAt');
  }.property('createdAt', 'controllers.clockService.pulse')
});

export default ConsultationController;
