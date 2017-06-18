import Ember from 'ember';

export default Ember.Controller.extend({
  mortgageHidden: true,
  popup: false,
  
  actions: {
    toggleMortgage() {
      this.toggleProperty('mortgageHidden');
    },
    togglePopup() {
      this.toggleProperty('popup');
    },
  }
});
