import Ember from 'ember';
import { rentalCategoryRooms } from 'advokat/helpers/rental-category-rooms';

export default Ember.Route.extend({
  title: 'Агентство Адвокат',
  
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  },
  
  afterModel(rental, transition) {
    this.set('title', rentalCategoryRooms([rental.get('category'), rental.get('rooms')]) + (rental.get('category') == 'квартира' ? ' квартира' : '') + ', ' + rental.get('address'));
  },
  
  actions: {
    toCalc() {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }
});