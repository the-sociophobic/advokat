import Ember from 'ember';

export default Ember.Component.extend({
  payment: undefined,
  term: undefined,
  rate: undefined,
  total: undefined,

  first: undefined,
  
  credit: undefined,
  
  monthly: undefined,
  
  init() {
    this._super(...arguments);
    this.set('payment', 30);
    this.set('term', 20);
    this.set('rate', 11);
  },
  
  didInsertElement() {
    this.set('first', this.get('total') * this.get('payment') / 100);

    this.set('credit', this.get('total') - this.get('first'));

    let q = this.get('rate') / 1200 + 1;
    let pow = Math.pow(q, this.get('term') * 12);
    let res = this.get('credit') * pow / (1 + ((pow / q - 1) / (q - 1)));
    this.set('monthly', res.toFixed());

    this.set('first', this.get('first').toFixed());
    this.set('credit', this.get('credit').toFixed());
  },
  
  actions: {
    commit() {
    this.set('first', this.get('total') * this.get('payment') / 100);

    this.set('credit', this.get('total') - this.get('first'));

    let q = this.get('rate') / 1200 + 1;
    let pow = Math.pow(q, this.get('term') * 12);
    let res = this.get('credit') * pow / (1 + ((pow / q - 1) / (q - 1)));
    this.set('monthly', res.toFixed());

    this.set('first', this.get('first').toFixed());
    this.set('credit', this.get('credit').toFixed());
    }
  }
});
