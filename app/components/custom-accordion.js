import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  
  actions: {
    toggleExpand() {
      this.toggleProperty('expanded');
    }
  }
});
