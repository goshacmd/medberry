define("app/controllers/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationController = Ember.Controller.extend({
      showNav: true,
      pusherError: false
    });

    __exports__["default"] = ApplicationController;
  });