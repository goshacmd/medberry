App.ModalDialogComponent = Ember.Component.extend({
  actions: {
    close: function() {
      this.sendAction();
    }
  }
});
