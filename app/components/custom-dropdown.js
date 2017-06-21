import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  
  actions: {
    toggleExpand() {
      this.toggleProperty('isExpanded');
    },
    Expand() {
      this.set('isExpanded', true);
    },
    Collapse() {
      this.set('isExpanded', false);
    },
    toggleLabel(label) {
      var hehe = [label];
      this.set('checked', hehe);
      this.set('isExpanded', false);
      
      this.get('commit')();
    },
    any() {
      var hehe = [];
      this.set('checked', hehe);
      this.set('isExpanded', false);

      this.get('commit')();
    }
  }
});
