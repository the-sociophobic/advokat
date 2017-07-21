import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  any: 'Любой',
  
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
      var hehe = label;
      this.set('selected', hehe);
      this.set('isExpanded', false);
      
      this.get('commit')();
    },
    any() {
      var hehe = undefined;
      this.set('selected', hehe);
      this.set('isExpanded', false);

      this.get('commit')();
    }
  }
});
