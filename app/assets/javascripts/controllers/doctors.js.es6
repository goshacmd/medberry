var DoctorsController = Ember.ArrayController.extend({
  queryParams: ['practice', 'online'],
  practice: 'all',
  online: false,

  filteredContent: function() {
    var practice = this.get('practice');
    var online = this.get('online');
    var content = this.get('content');

    if (practice !== 'all') {
      content = content.filterBy('practice', practice);
    }

    if (online) {
      content = content.filterBy('online', true);
    }

    return content;
  }.property('@each.{practice,online}', 'practice', 'online')
});

export default DoctorsController;
