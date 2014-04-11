var NavController = Ember.Controller.extend({
  needs: ['queue'],

  queueBadge: Ember.computed.alias('controllers.queue.length')
});

export default NavController;
