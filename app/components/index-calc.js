import Ember from 'ember';

export default Ember.Component.extend({
  mortgageHidden: false,
  rateHidden: true,
  payment: undefined,
  term: undefined,
  rate: undefined,
  monthly: undefined,
  credit: undefined,
  first: undefined,
  total: undefined,
  
  init() {
    this._super(...arguments);
    this.set('payment', 45);
    this.set('term', 6);
    this.set('rate', 12);
    this.set('total', 5350000);
  },
  
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('first', this.get('total') * this.get('payment') / 100);
    this.set('credit', this.get('total') - this.get('first'));
    
    let q = this.get('rate') / 1200 + 1;
    let pow = Math.pow(q, this.get('term') * 12);
    let res = this.get('credit') * pow / (1 + ((pow / q - 1) / (q - 1))) ;
    this.set('monthly', res.toFixed());
  },

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
