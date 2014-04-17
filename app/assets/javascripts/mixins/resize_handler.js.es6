var ResizeHandlerMixin = Ember.Mixin.create({
  _resizeHandler: null,

  _bindResize: function() {
    var self = this;

    this._resizeHandler = function() {
      Ember.run(function() { self.send('resize') })
    };

    $(window).bind('resize', this._resizeHandler);
  }.on('didInsertElement'),

  _unbindResize: function() {
    $(window).unbind('resize', this._resizeHandler);
  }.on('willDestroyElement')
});

export default ResizeHandlerMixin;
