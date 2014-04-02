var ConsultationController = Ember.ObjectController.extend({
  needs: ['clockService'],

  runTime: function() {
    return (new Date) - this.get('createdAt');
  }.property('createdAt', 'controllers.clockService.pulse'),

  isExpired: function() {
    return (new Date) >= this.get('expiry')
  }.property('expiry', 'controllers.clockService.pulse'),

  isOver: Ember.computed.or('isFinished', 'isExpired'),
  isNotOver: Ember.computed.not('isOver'),

  isActive: Ember.computed.and('isNewConsultation', 'isNotOver')
});

export default ConsultationController;
