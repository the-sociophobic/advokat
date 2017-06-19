import Ember from 'ember';

export default Ember.Component.extend({
  accepted: true,
  
  actions: {
    toggleAccepted() {
      this.toggleProperty('accepted');
    },
    toggleShown(accepted) {
      if (accepted)
        this.toggleProperty('shown');
    },
  }
});
