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

  extensionEdge: function() {
    var finishedAt = this.get('finishedAt');

    if (!finishedAt) return;

    return moment(finishedAt).add('m', 1).toDate();
  }.property('finishedAt'),

  extensionTimeLeft: function() {
    return this.get('extensionEdge') - (new Date);
  }.property('extensionEdge', 'controllers.clockService.pulse'),

  canExtend: Ember.computed.gt('extensionTimeLeft', 0),

  isExpired: function() {
    return (new Date) >= this.get('expiresAt');
  }.property('expiresAt', 'controllers.clockService.pulse'),

  newMessage: null,
  cannotSendMessage: Ember.computed.empty('newMessage'),

  actions: {
    sendMessage: function() {
      if (this.get('cannotSendMessage')) return;

      var text = this.get('newMessage');

      this.set('newMessage', '');

      this.store.createRecord('message', {
        consultation: this.get('model'),
        text: text
      }).save();
    }
  }
});

export default ConsultationController;
