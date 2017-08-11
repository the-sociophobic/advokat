import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Агентство Адвокат',
  
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
    
    console.log(this.get('model'));
  },
  
  model() {    
    return this.get('store').findAll('rental');
  }
});