import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category'],
  category: null,
    
  actions:  {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  },
/*
  session: Ember.inject.service('session'),
  errorMessage: 'loool ne rabptait',

  activate: function() {
    this.get('session').authenticate('authenticator:oauth2', 'admin', 'dermo321').catch((reason) => {
        this.set('errorMessage', reason.error || reason);
    });
  }
*/  
});