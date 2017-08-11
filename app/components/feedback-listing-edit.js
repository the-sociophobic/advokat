import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  
  actions: {
    delete() {
      this.get('store').findRecord('feedback', this.get('feedback').id).then(feedback => {
        feedback.destroyRecord();
      });
    }
  }
});
