var DoctorsController = Ember.ArrayController.extend({
  queryParams: ['practice', 'online'],
  practice: false,
  online: false,

  filteredContent: function() {
    var practice = this.get('practice');
    var online = this.get('online');
    var content = this.get('content');

    if (practice) {
      content = content.filterProperty('practice', practice);
    }

    if (online) {
      content = content.filterProperty('online', true);
    }

    return content;
  }.property('@each.{practice,online}', 'practice', 'online')
});

export default DoctorsController;
