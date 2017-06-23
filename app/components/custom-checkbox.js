import Ember from 'ember';

export default Ember.Component.extend({  
  actions: {
    toggleChecked() {
      this.toggleProperty('checked');
    }
  }
});
