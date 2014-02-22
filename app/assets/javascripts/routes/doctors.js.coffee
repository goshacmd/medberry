Medlive.DoctorsRoute = Ember.Route.extend
  model: ->
    @store.find 'doctor'
