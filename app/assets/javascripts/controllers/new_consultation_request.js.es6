import DC from 'app/models/diagnosis_category';

var NewConsultationRequestController = Ember.ObjectController.extend({
  isSaving: false,
  hasError: false,

  causeCategories: DC.FIXTURES,

  resetState: function() {
    this.set('isSaving', false);
    this.set('hasError', false);
  },

  setError: function() {
    this.set('isSaving', false);
    this.set('hasError', true);
  },

  actions: {
    createRequest: function() {
      var self = this;

      var goToRequest = function(request) {
        self.resetState();

        self.transitionToRoute('patient.dashboard');
        self.send('closeModal');
      }

      var handleError = function() {
        self.setError();
      }

      this.resetState();
      this.set('isSaving', true);

      var request = this.store.createRecord('consultation_request', this.get('model'));
      request.save().then(goToRequest, handleError);
    }
  }
});

export default NewConsultationRequestController;
