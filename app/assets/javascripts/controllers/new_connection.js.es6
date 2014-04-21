var NewConnectionContoller = Ember.Controller.extend({
  email: null,
  isInviting: false,
  invited: false,

  emailBlank: Ember.computed.empty('email'),
  buttonDisabled: Ember.computed.or('isInviting', 'emailBlank'),

  actions: {
    invite: function() {
      var email = this.get('email');
      this.set('isInviting', true);

      $.ajax({
        type: 'POST',
        url: '/api/connections',
        data: { email: email },
        context: this,

        success: function() {
          this.set('invited', true);
          this.set('email', null);
        },

        error: function() {
        },

        complete: function() {
          this.set('isInviting', false);
        }
      });
    }
  }
});

export default NewConnectionContoller;
