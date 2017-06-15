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
      var hehe = this.get('checked').copy();
      var index = hehe.indexOf(label);
      
      if (index > -1) {
        hehe.splice(index, 1);
      }
      else {
        hehe.push(label);
      }
      this.set('checked', hehe);
      
      this.get('commit')();
    }
  }
});
