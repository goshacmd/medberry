var ToggleableStar = Ember.Component.extend({
  tagName: 'span',
  value: null,

  actions: {
    toggle: function() {
      this.sendAction();
    }
  }
});

export default ToggleableStar;
