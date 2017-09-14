import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  noScroll: false,
  
  actions: {
    noScrollToggle() {
      this.toggleProperty('noScroll');
    }
  }
});
