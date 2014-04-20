var ToggleableStar = Ember.Component.extend({
  tagName: 'a',
  classNames: ['star'],
  layout: Ember.Handlebars.compile('{{#if value}}&#9733;{{else}}&#9734;{{/if}}'),

  value: null,

  click: function(e) {
    this.sendAction();
  }
});

export default ToggleableStar;
