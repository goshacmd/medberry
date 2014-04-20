var OnlineDotComponent = Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['isOffline:dot-offline:dot-online'],
  layout: Ember.Handlebars.compile('&#9679'),

  isOffline: null
});

export default OnlineDotComponent;
