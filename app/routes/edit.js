import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      rentals: this.get('store').findAll('rental'),
      feedbacks: this.get('store').findAll('feedback'),
      posts: this.get('store').findAll('post')
    });
  }
});
