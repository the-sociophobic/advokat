import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  queryParams: ['id', 'type'],
  id: null,
  type: null,
  
  init() {
    this._super(...arguments);
    alert(this.get('type'));
    var that = this;
    if (this.get('id')) {
      alert(this.get('id'));
      this.get('store').findRecord(this.get('type'), this.get('id')).then(function(editable) {
        that.set('editable', editable);
      });
    }
    else {
      alert('new');
      this.set('editable', this.get('store').createRecord(this.get('type')));
    }
  },
  
  actions: {
    cancel() {
      window.location.href = 'javascript:history.back()';
    },
    delete() {
      this.get('editable').destroyRecord();
      window.location.href = 'javascript:history.back()';      
    },
    save() {
      this.get('editable').save();
    }
  }
});
