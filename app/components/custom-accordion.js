import Ember from 'ember';

export default Ember.Component.extend({
  expanded: true,
  
  actions: {
    toggleExpand() {
      this.toggleProperty('expanded');
    }
  }
});
