import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  
  actions: {
    logout() {
      this.get('session').invalidate();
    },
    
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
        alert(JSON.stringify(this.get('errorMessage'), null, 4));
      });
      
      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        //Ember.$.ajax('/secret-data', { headers });
        alert(headerName);
        alert(headerValue);
      });
    }
  }
});
