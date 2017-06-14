import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    check() {
      this.get('onCheck')();
    }
  }
});
