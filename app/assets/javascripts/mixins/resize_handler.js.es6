var ResizeHandlerMixin = Ember.Mixin.create({
  _resizeHandler: function() {
    var self = this;
    Ember.run(function() { self.send('resize') })
  },

  _bindResize: function() {
    $(window).on('resize', $.proxy(this, '_resizeHandler'));
  }.on('didInsertElement'),

  _unbindResize: function() {
    $(window).off('resize', $.proxy(this, '_resizeHandler'));
  }.on('willDestroyElement')
});

export default ResizeHandlerMixin;
