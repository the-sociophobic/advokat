import Ember from 'ember';

export default Ember.Component.extend({
  show: undefined,

  init() {
    this._super(...arguments);
    let a = this.get('rentals.length') - this.get('rentals.length') % 4;
    this.set('show', a > 12 ? 12 : a);
  }
});
