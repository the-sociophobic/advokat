import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  
  actions: {
    delete() {
      this.get('store').findRecord('post', this.get('post').id).then(post => {
        post.destroyRecord();
      });
    }
  }
});
