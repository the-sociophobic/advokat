import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  checkedLabels: [],
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
      var hehe = this.get('checkedLabels').copy();
      var index = hehe.indexOf(label);
      
      if (index > -1) {
        hehe.splice(index, 1);
      }
      else {
        hehe.push(label);
      }
      this.set('checkedLabels', hehe);
    }
  }
});
