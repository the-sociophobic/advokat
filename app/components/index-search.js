import Ember from 'ember';

export default Ember.Component.extend({
  buyCheck:    true,
  sellCheck:   false,
  rentCheck:   false,
  toRentCheck: false,
  
  isHidden: false,
  
  actions: {
    buy() {
      this.set('buyCheck',    true);
      this.set('sellCheck',   false);
      this.set('rentCheck',   false);
      this.set('toRentCheck', false);
      this.set('isHidden',    false); 
    },
    sell() {
      this.set('buyCheck',    false);
      this.set('sellCheck',   true);
      this.set('rentCheck',   false);
      this.set('toRentCheck', false);
      this.set('isHidden',    false); 
    },
    rent() {
      this.set('buyCheck',    false);
      this.set('sellCheck',   false);
      this.set('rentCheck',   true);
      this.set('toRentCheck', false);
      this.set('isHidden',    true); 
    },
    toRent() {
      this.set('buyCheck',    false);
      this.set('sellCheck',   false);
      this.set('rentCheck',   false);
      this.set('toRentCheck', true); 
      this.set('isHidden',    true); 
    }
  }
});
