import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  errorMessage: 'loool ne rabptait',

  queryParams: ['category'],
  category: null,
  
  init() {
    this._super(...arguments);
    this.get('session').authenticate('authenticator:oauth2', 'admin', 'dermo321').catch((reason) => {
        this.set('errorMessage', reason.error || reason);
    });
    this.set('errorMessage', 'ey');
  },
});
