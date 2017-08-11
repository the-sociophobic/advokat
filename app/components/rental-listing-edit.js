import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  
  actions: {
    delete() {
      this.get('store').findRecord('rental', this.get('rental').id).then(rental => {
        rental.destroyRecord();
      });
    }
  }
});
