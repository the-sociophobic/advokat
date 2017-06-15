import Ember from 'ember';

export default Ember.Component.extend({
  mortgageHidden: true,
  rateHidden: true,
  
  actions: {
    toggleMortgage() {
      this.toggleProperty('mortgageHidden');
      this.set('rateHidden', true);
    },
    toggleRate() {
      this.toggleProperty('rateHidden');
      this.set('mortgageHidden', true);
    }
  }
});
