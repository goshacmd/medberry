import DC from 'app/models/diagnosis_category';

var Slug = Ember.Object.extend({
  slug: null,
  i18nPath: null,

  humanLabel: function() {
    var slug = this.get('slug');
    var path = this.get('i18nPath');

    return I18n.t('js.' + path + '.' + slug);
  }.property('slug', 'i18nPath')
});

var FeedbackCategory = Slug.extend({
  i18nPath: 'feedback.categories'
});

var FeedbackProblem = Slug.extend({
  checked: false
});

var FeedbackAudioProblem = FeedbackProblem.extend({
  i18nPath: 'feedback.audio_problems'
});

var FeedbackVideoProblem = FeedbackProblem.extend({
  i18nPath: 'feedback.video_problems'
});

var ConsultationIndexController = Ember.ObjectController.extend({
  needs: ['clockService'],

  diagnosisCategories: DC.FIXTURES,

  feedbackCategories: [
    'excellent', 'minor_problems', 'some_problems',
    'several_problems', 'bad'
  ].map(function(f) { return FeedbackCategory.create({ slug: f }); }),

  feedbackAudioProblems: [
    'didnt_hear', 'other_didnt_hear', 'dropped', 'unnatural_speech',
    'fades', 'echo', 'noise', 'delay', 'none'
  ].map(function(p) { return FeedbackAudioProblem.create({ slug: p }); }),

  feedbackVideoProblems: [
    'didnt_see', 'other_didnt_see', 'bad_image', 'none'
  ].map(function(p) { return FeedbackVideoProblem.create({ slug: p }); }),

  feedbackShown: true,
  feedbackCategory: null,
  feedbackStep: 1,
  feedbackStep1: Ember.computed.equal('feedbackStep', 1),
  feedbackStep2: Ember.computed.equal('feedbackStep', 2),

  isTimeOver: Ember.computed.or('isFinished', 'isExpired'),
  isNotTimeOver: Ember.computed.not('isTimeOver'),
  isActive: Ember.computed.and('isInProgress', 'isNotTimeOver'),

  showVideo: Ember.computed.alias('isModeVideo'),

  runTime: function() {
    return (new Date) - this.get('createdAt');
  }.property('createdAt', 'controllers.clockService.pulse'),

  remainingTime: function() {
    return this.get('expiresAt') - (new Date);
  }.property('expiresAt', 'controllers.clockService.pulse'),

  extensionEdge: function() {
    var finishedAt = this.get('finishedAt');

    if (!finishedAt) return;

    return moment(finishedAt).add('m', 1).toDate();
  }.property('finishedAt'),

  extensionTimeLeft: function() {
    return this.get('extensionEdge') - (new Date);
  }.property('extensionEdge', 'controllers.clockService.pulse'),

  positiveExtensionTime: Ember.computed.gt('extensionTimeLeft', 0),
  canExtend: Ember.computed.and('isOver', 'positiveExtensionTime'),

  isExpired: function() {
    return (new Date) >= this.get('expiresAt');
  }.property('expiresAt', 'controllers.clockService.pulse'),

  actions: {
    saveAdvice: function() {
      this.get('model').save();
    },

    hideFeedback: function() {
      this.set('feedbackShown', false);
    },

    setFeedbackCategory: function(idx) {
      this.set('feedbackCategory', idx);
      this.set('feedbackStep', 2);
    },

    sendFeedback: function() {
      this.set('feedbackShown', false);

      var category = this.get('feedbackCategory');
      var audio = this.get('feedbackAudioProblems');
      var video = this.get('feedbackVideoProblems');

      var makeMap = function(problems) {
        var hash = {};

        problems.forEach(function(p) {
          var slug = p.get('slug'), check = p.get('checked');

          hash[slug] = check;
        });

        return hash;
      };

      var data = {
        feedback: {
          category: category,
          audio_problems: makeMap(audio),
          video_problems: makeMap(video)
        }
      };

      $.ajax({
        type: 'POST',
        url: '/api/feedback',
        data: data
      });
    }
  }
});

export default ConsultationIndexController;
