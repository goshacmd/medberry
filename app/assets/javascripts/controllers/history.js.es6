var HistoryController = Ember.ArrayController.extend({
  queryParams: ['status'],
  status: 'all',

  sortProperties: ['createdAt'],
  sortAscending: false,

  filteredContent: function() {
    var status = this.get('status');
    var content = this.get('content');

    if (status === 'consulted') {
      content = content.filterBy('consultation');
    } else if (status === 'canceled') {
      content = content.filterBy('consultation', null);
    }

    return content;
  }.property('@each.consultation', 'status')
});

export default HistoryController;
