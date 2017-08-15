import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  anyFlag: true,

  actions: {
    toggleExpand() {
      this.toggleProperty('isExpanded');
    },
    
    Expand() {
      this.set('isExpanded', true);
    },
    
    Collapse() {
      this.set('isExpanded', false);
      if (this.get('checkedOptions').length === 0)
        this.set('anyFlag', true);
    },
    
    toggleLabel(label) {
      var hehe = (this.get('anyFlag') ? [] : this.get('checkedOptions').copy());
      this.set('anyFlag', false);
      
      var index = hehe.indexOf(label);
      
      if (index > -1) {
        hehe.splice(index, 1);
      }
      else {
        hehe.push(label);
      }
      this.set('checkedOptions', hehe);
      
      if(this.get('checkedOptions').length == this.get('options').length) {
        this.set('anyFlag', true);
        this.set('checkedOptions', []);
      }

      this.get('commit')();
    },
    
    any() {
      this.set('checkedOptions', []);
      this.toggleProperty('anyFlag');
      
      this.get('commit')();
    }
  }
});
