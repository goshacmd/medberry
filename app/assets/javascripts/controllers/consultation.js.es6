var ConsultationController = Ember.ObjectController.extend({
  needs: ['clockService'],

  isTimeOver: Ember.computed.or('isFinished', 'isExpired'),
  isNotTimeOver: Ember.computed.not('isTimeOver'),
  isActive: Ember.computed.and('isInProgress', 'isNotTimeOver'),

  showVideo: true,

  runTime: function() {
    return (new Date) - this.get('createdAt');
  }.property('createdAt', 'controllers.clockService.pulse'),

  remainingTime: function() {
    return this.get('expiresAt') - (new Date);
  }.property('expiresAt', 'controllers.clockService.pulse'),

  extensionEdge: function() {
    var finishedAt = this.get('finishedAt');

    if (!finishedAt) return;

    return moment(finishedAt).add('m', 1).toDate();
  }.property('finishedAt'),

  extensionTimeLeft: function() {
    return this.get('extensionEdge') - (new Date);
  }.property('extensionEdge', 'controllers.clockService.pulse'),

  positiveExtensionTime: Ember.computed.gt('extensionTimeLeft', 0),
  canExtend: Ember.computed.and('isOver', 'positiveExtensionTime'),

  isExpired: function() {
    return (new Date) >= this.get('expiresAt');
  }.property('expiresAt', 'controllers.clockService.pulse')
});

export default ConsultationController;
