import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  headers: {
    'Accept': 'application/json, text/javascript; q=0.01',
    'Authorization': 'Basic YWRtaW46ZGVybW8zMjE=',
    'Content-Type': 'application/hal+json',
  },
  host: 'http://agentstvo-adv.ru:8080/maindb'
});