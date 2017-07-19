import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://agentstvo-adv.ru:8080/test'
});