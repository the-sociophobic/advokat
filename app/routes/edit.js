import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(//AuthenticatedRouteMixin,
{
  model() {
    return RSVP.hash({
      callbacks: this.get('store').findAll('callback', { reload: true }),
      rentals: this.get('store').findAll('rental', { reload: true }),
      agents: this.get('store').findAll('agent', { reload: true }),
      feedbacks: this.get('store').findAll('feedback', { reload: true }),
      posts: this.get('store').findAll('post', { reload: true })
    });
  }
});
