import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(//DataAdapterMixin,
{
  host: 'http://agentstvo-adv.ru:8080/maindb',
  headers: {
    'Accept': 'application/json, text/javascript; q=0.01',
    'Authorization': 'Basic YnJvbm5pa292YTpjbHVicG9ydA==', // bronnikova:clubport 
    'Content-Type': 'application/hal+json',
  },
//  authorizer: 'authorizer:oauth2'
});

/*
*/