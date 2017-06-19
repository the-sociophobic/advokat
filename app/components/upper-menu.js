import Ember from 'ember';

export default Ember.Component.extend({
  showPopup: false,
  
  actions: {
    popup() {
      this.toggleProperty('showPopup');
    }
  }
});
