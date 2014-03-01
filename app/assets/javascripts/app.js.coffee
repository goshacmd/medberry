#= require jquery
#= require jquery_ujs
#= require handlebars
#= require ember
#= require ember-data
#= require_self
#= require medlive

# for more details see: http://emberjs.com/guides/application/
window.Medlive = Ember.Application.create()

Ember.Application.initializer
  name: 'currentUser'

  initialize: (container, application) ->
    store = container.lookup 'store:main'
    obj = store.load Medlive.User, currentUser

    container.register 'user:current', Medlive.User.find(obj.id), instantiate: false

    container.injection 'route', 'currentUser', 'user:current'
    container.injection 'controller:application', 'currentUser', 'user:current'
