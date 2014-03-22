define("adapters/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationAdapter = DS.ActiveModelAdapter.extend({
      namespace: 'api'
    });

    __exports__["default"] = ApplicationAdapter;
  });