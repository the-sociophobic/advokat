import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type', 'property-type'],
  type: 'buy',
  propertyType: 'living',

  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});