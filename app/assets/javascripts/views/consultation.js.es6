import ResizeHandlerMixin from 'app/mixins/resize_handler';

var optimalSize = function(width, height, aspectRatio) {
  var candidate1 = { width: width, height: width * aspectRatio };
  var candidate2 = { width: height / aspectRatio, height: height };

  return candidate1.height > height ? candidate2 : candidate1;
}

var ConsultationView = Ember.View.extend(ResizeHandlerMixin, {
  wasInserted: false,

  didInsertElement: function() {
    this.set('wasInserted', true);
    this.notifyPropertyChange('size');
  },

  size: function() {}.property(),

  width: function() {
    if (!this.get('wasInserted')) return;
    return this.$().width();
  }.property('size'),

  height: function() {
    if (!this.get('wasInserted')) return;
    return $(window).height() - this.$().offset().top - 100;
  }.property('size'),

  videoSize: function() {
    var width = this.get('width'),
        height = this.get('height');

    return optimalSize(width - 300, height, 3/4);
  }.property('width', 'height'),

  actions: {
    resize: function() {
      this.notifyPropertyChange('size');
    }
  }
});

export default ConsultationView;
