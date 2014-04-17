//= require i18n
//= require i18n/translations
//= require moment
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require env
//= require ember
//= require ember-data
//= require ember-appkit
//= require utils
//= require app
//= require_self
//= require_tree ./adapters
//= require router
//= require medberry
//= require_tree ./initializers

TB.setLogLevel(1);

Ember.Inflector.inflector.irregular('meta', 'meta');
Ember.Inflector.inflector.irregular('consultationRequestQueueMeta', 'consultationRequestQueueMeta');
Ember.Inflector.inflector.irregular('consultation_request_queue_meta', 'consultation_request_queue_meta');

window.App = require('app/app').default.create();
