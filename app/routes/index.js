import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  title: 'Агентство Адвокат',
  
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  },
  
  model() {
    return RSVP.hash({
      rentals: this.get('store').findAll('rental', { reload: true }).then(rentals => {
        return rentals.filter(rental => {
          return (rental.get('special') === 'да');
        });
      }),
      feedbacks: this.get('store').findAll('feedback', { reload: true }),
      posts: this.get('store').findAll('post', { reload: true })
    });
  }
});
