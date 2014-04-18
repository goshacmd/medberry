var MessagesController = Ember.ArrayController.extend({
  sortProperty: ['createdAt'],

  showForm: Ember.computed.alias('parentController.model.isInProgress'),
  newMessage: null,
  cannotSendMessage: Ember.computed.empty('newMessage'),

  actions: {
    sendMessage: function() {
      if (this.get('cannotSendMessage')) return;

      var text = this.get('newMessage');

      this.set('newMessage', '');

      this.store.createRecord('message', {
        consultation: this.get('parentController.model'),
        text: text
      }).save();
    }
  }
});

export default MessagesController;
