import Ember from 'ember';

export default Ember.Controller.extend({
  showPopup1: false,
  showPopup2: false,
  noScroll: false,
  
  actions: {
    popup1() {
      this.toggleProperty('showPopup1');
    },
    popup2() {
      this.toggleProperty('showPopup2');
    },
    noScrollToggle() {
      this.toggleProperty('noScroll');
    }
  }
});
