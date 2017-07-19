import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type', 'category'],
  type:     'купить',
  category: 'жилая',
  
  actions: {
    filterByAll(type, property_type, roomsOrLotMin, roomsOrLotMax, areaMin, areaMax, priceMin, priceMax, category, district) {
      if (property_type === 'commerical') {
        return this.get('store').query('rental', { type: type,
                                                   property_type: property_type,
                                                   areaMin: areaMin,
                                                   areaMax: areaMax,
                                                   priceMin: priceMin,
                                                   priceMax: priceMax,
                                                   category: category,
                                                   district: district }); }
      else if (property_type === 'country') {
        return this.get('store').query('rental', { type: type,
                                                   property_type: property_type,
                                                   lotMin: roomsOrLotMin,
                                                   lotMax: roomsOrLotMax,
                                                   areaMin: areaMin,
                                                   areaMax: areaMax,
                                                   priceMin: priceMin,
                                                   priceMax: priceMax,
                                                   category: category,
                                                   district: district }); }
      else {
        return this.get('store').query('rental', { type: type,
                                                   property_type: property_type,
                                                   roomsMin: roomsOrLotMin,
                                                   roomsMax: roomsOrLotMax,
                                                   areaMin: areaMin,
                                                   areaMax: areaMax,
                                                   priceMin: priceMin,
                                                   priceMax: priceMax,
                                                   category: category,
                                                   district: district }); }
    }
  }
});