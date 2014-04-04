var QueueMeta = DS.Model.extend({
  updatedAt: DS.attr('date'),
  position: DS.attr('number'),
  waiting: DS.attr('number')
});

export default QueueMeta;
