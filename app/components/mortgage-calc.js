import Ember from 'ember';

export default Ember.Component.extend({
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
    let res = this.get('credit') * pow / (1 + ((pow / q - 1) / (q - 1)));
    return res.toFixed(); }),
  
  init() {
    this._super(...arguments);
    this.set('payment', 30);
    this.set('term', 20);
    this.set('rate', 11);
  },
  
  didInsertElement() {
    let q = this.get('rate') / 1200 + 1;
    let pow = Math.pow(q, this.get('term') * 12);
    let res = this.get('credit') * pow / (1 + ((pow / q - 1) / (q - 1)));
    this.set('monthly', res.toFixed());
  },

});
