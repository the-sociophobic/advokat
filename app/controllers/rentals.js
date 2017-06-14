import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type', 'category'],
  type:     'sell',
  category: 'living',
  
  actions: {
    filterByAll(type, category, roomsOrLotMin, roomsOrLotMax, areaMin, areaMax, priceMin, priceMax) {
      if (category == 'commerical') {
        return this.get('store').query('rental', { type: type,
                                                   category: category,
                                                   areaMin: areaMin,
                                                   areaMax: areaMax,
                                                   priceMin: priceMin,
                                                   priceMax: priceMax }); }
      else if (category == 'country') {
        return this.get('store').query('rental', { type: type,
                                                   category: category,
                                                   lotMin: roomsOrLotMin,
                                                   lotMax: roomsOrLotMax,
                                                   areaMin: areaMin,
                                                   areaMax: areaMax,
                                                   priceMin: priceMin,
                                                   priceMax: priceMax }); }
      else {
        return this.get('store').query('rental', { type: type,
                                                   category: category,
                                                   roomsMin: roomsOrLotMin,
                                                   roomsMax: roomsOrLotMax,
                                                   areaMin: areaMin,
                                                   areaMax: areaMax,
                                                   priceMin: priceMin,
                                                   priceMax: priceMax }); }
    }
  }
});