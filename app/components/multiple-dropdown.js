import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  anyFlag: true,
  checkedBool: undefined,
  
  init() {
    this._super(...arguments);
    
    var tmp = Array(this.get('options').length).fill(true);
    
    this.set('checkedBool', tmp);
  },
  
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
      var hehe = (this.get('anyFlag') ? this.get('options').copy() : this.get('checkedOptions').copy());
      this.set('anyFlag', false);
      
      var index = hehe.indexOf(label);
      
      if (index > -1) {
        hehe.splice(index, 1);
      }
      else {
        hehe.push(label);
      }
      this.set('checkedOptions', hehe);
      
      this.get('commit')();
    },
    
    any() {
      if (this.get('anyFlag'))
        this.set('checkedOptions', []);
      else
        this.set('checkedOptions', this.get('options').copy());

      this.toggleProperty('anyFlag');
      this.get('commit')();
    }
  }
});
