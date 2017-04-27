import Ember from 'ember';

export default Ember.Component.extend({
  isHidden: false,
  actions: {
    setVisible() {
      this.set('isHidden', false);
    },
    setInvisible() {
      this.set('isHidden', true);
    }
  }
});
