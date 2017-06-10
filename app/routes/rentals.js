import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Агентство Адвокат',
  
  model() {    
    return $.get('http://agentstvo-adv.ru:8080/test/rentals').findAll('rental');
  }
});