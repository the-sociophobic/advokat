import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Агентство Адвокат',
  
  model() {
    return this.get('store').findAll('rental');
  }
});
