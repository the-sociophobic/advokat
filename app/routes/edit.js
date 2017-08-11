import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(//AuthenticatedRouteMixin,
{
  model() {
    return RSVP.hash({
      callbacks: this.get('store').findAll('callback'),
      rentals: this.get('store').findAll('rental'),
      agents: this.get('store').findAll('agent'),
      feedbacks: this.get('store').findAll('feedback'),
      posts: this.get('store').findAll('post')
    });
  }
});
