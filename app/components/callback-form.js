import Ember from 'ember';

export default Ember.Component.extend({
  accepted: true,
  
  actions: {
    toggleAccepted() {
      this.toggleProperty('accepted');
    },
    toggleShown() {
      this.toggleProperty('shown');
    },
  }
});
