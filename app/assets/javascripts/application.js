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
//= require medlive
//= require_tree ./initializers

TB.setLogLevel(1);

window.App = require('app/app').default.create();
