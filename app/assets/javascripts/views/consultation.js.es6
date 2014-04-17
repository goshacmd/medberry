import ResizeHandlerMixin from 'app/mixins/resize_handler';

var optimalSize = function(width, height, aspectRatio) {
  var candidate1 = { width: width, height: width * aspectRatio };
  var candidate2 = { width: height / aspectRatio, height: height };

  return candidate1.height > height ? candidate2 : candidate1;
}

var ConsultationView = Ember.View.extend(ResizeHandlerMixin, {
  width: null,
  height: null,

  videoSize: function() {
    var width = this.get('width'),
        height = this.get('height');

    return optimalSize(width - 300, height, 3/4);
  }.property('width', 'height'),

  setSize: function() {
    this.set('width', this.$().width());
    this.set('height', $(window).height() - this.$().offset().top - 100);
  }.on('didInsertElement'),

  actions: {
    resize: function() {
      this.setSize();
    }
  }
});

export default ConsultationView;
