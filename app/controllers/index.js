import Ember from 'ember';

export default Ember.Controller.extend({
  mortgageHidden: true,

  showPopup1: false,
  showPopup2: false,
  showPopup3: false,
  
  actions: {
    toggleMortgage() {
      this.toggleProperty('mortgageHidden');
    },
    popup1() {
      this.toggleProperty('showPopup1');
    },
    popup2() {
      this.toggleProperty('showPopup2');
    },
    popup3() {
      this.toggleProperty('showPopup3');
    }
  }
});
