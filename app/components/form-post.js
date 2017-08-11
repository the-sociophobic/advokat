import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  post: undefined,
  init() {
    this._super(...arguments);
    if (this.get('editable'))
      this.get('store').findRecord('post', this.get('editable').id).then(post => {
        this.set('post', post);
      });
    else
      this.set('post', this.get('store').createRecord('post'));
  },
  
  actions: {
    save() {
      this.get('post').save();
      window.history.back();
    },
    cancel() {
      window.history.back();
    },
    delete() {
      this.get('post').destroyRecord();
      window.history.back();
    }
  }
});
