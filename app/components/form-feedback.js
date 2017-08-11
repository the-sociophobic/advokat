import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  feedback: undefined,
  init() {
    this._super(...arguments);
    if (this.get('editable'))
      this.get('store').findRecord('feedback', this.get('editable').id).then(feedback => {
        this.set('feedback', feedback);
      });
    else
      this.set('feedback', this.get('store').createRecord('feedback'));
  },
  
  actions: {
    save() {
      this.get('feedback').save();
      window.history.back();
    },
    cancel() {
      window.history.back();
    },
    delete() {
      this.get('feedback').destroyRecord();
      window.history.back();
    }
  }
});
