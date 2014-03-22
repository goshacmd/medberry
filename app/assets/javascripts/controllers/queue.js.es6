var QueueController = Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  nextRequest: Ember.computed.alias('arrangedContent.firstObject')
});

export default QueueController;
