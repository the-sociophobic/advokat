import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  
  actions: {
    delete() {
      this.get('store').findRecord('agent', this.get('agent').id).then(agent => {
        agent.destroyRecord();
      });
    }
  }
});
