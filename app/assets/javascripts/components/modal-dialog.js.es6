var ModalDialogComponent = Ember.Component.extend({
  actions: {
    close: function() {
      this.sendAction();
    }
  }
});

export default ModalDialogComponent;
