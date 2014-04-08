var QueueMeta = DS.Model.extend({
  updatedAt: DS.attr('date'),
  position: DS.attr('number'),
  waiting: DS.attr('number'),

  firstInQueue: Ember.computed.equal('position', 0)
});

export default QueueMeta;
