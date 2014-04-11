var ConsultationController = Ember.ObjectController.extend({
  needs: ['clockService'],

  isOver: Ember.computed.or('isFinished', 'isExpired'),
  isNotOver: Ember.computed.not('isOver'),
  isActive: Ember.computed.and('isNewConsultation', 'isNotOver'),

  showVideo: true,

  runTime: function() {
    return (new Date) - this.get('createdAt');
  }.property('createdAt', 'controllers.clockService.pulse'),

  remainingTime: function() {
    return this.get('expiresAt') - (new Date);
  }.property('expiresAt', 'controllers.clockService.pulse'),

  isExpired: function() {
    return (new Date) >= this.get('expiresAt');
  }.property('expiresAt', 'controllers.clockService.pulse')
});

export default ConsultationController;
