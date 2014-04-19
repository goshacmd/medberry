var IdentityCard = Ember.Component.extend({
  avatarSize: 64,
  avatarUrl: null,

  imgStyle: function() {
    var size = this.get('avatarSize') + 'px';
    return "height: " + size + "; width: " + size + ";";
  }.property('avatarSize')
});

export default IdentityCard;
