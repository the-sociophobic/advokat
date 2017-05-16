import Ember from 'ember';

export default Ember.Component.extend({
  mortgageHidden: true,
  rateHidden: true,
  payment: undefined,
  term: undefined,
  rate: undefined,
  total: undefined,

  first: Ember.computed('total', 'payment', function() {
    return (this.get('total') * this.get('payment') / 100).toFixed(); }),
  
  credit: Ember.computed('total', 'first', function() {
    return (this.get('total') - this.get('first')).toFixed(); }),
  
  monthly: Ember.computed('rate', 'credit', 'term', 'monthly', function() {
    let q = this.get('rate') / 1200 + 1;
    let pow = Math.pow(q, this.get('term') * 12);
    let res = this.get('credit') * pow / (1 + ((pow / q - 1) / (q - 1))) ;
    return res.toFixed(); }),
  
  init() {
    this._super(...arguments);
    this.set('payment', 35);
    this.set('term', 5);
    this.set('rate', 20);
    this.set('total', 5000000);
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
