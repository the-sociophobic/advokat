import Ember from 'ember';

export default Ember.Route.extend({
  /*
  model() {
    return [{
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      type: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
      metro: 'Приморская'
    }, {
      id: 'urban-living',
      title: 'Urban Living',
      owner: 'Mike TV',
      city: 'Seattle',
      type: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
    }, {
      id: 'downtown-charm',
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      type: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
    }];
  }
  */
  model() {
    return [{
      type: 'продажа',
      property_type: 'жилая',
      category:  'квартира', /* владелец */
      description: 'тут будет описание',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',

      price: 35000000,

      area: 44,
      living_space: 32,
      kitchen_space: 12,
      rooms: 2,
      floor: 6,

      address: 'Аэродромная 5к1',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Приморская',
      time_on_transport: '5 минут',
      time_on_foot: '10 минут'
  }, {
      type: 'продажа',
      property_type: 'жилая',
      category:  'квартира', /* владелец */
      description: 'тут будет описание',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',

      price: 35000000,

      area: 44,
      living_space: 32,
      kitchen_space: 12,
      rooms: 2,
      floor: 6,

      address: 'Аэродромная 5к1',
      latitude: '59.997256',
      longitude: '30.297199',
      metro: 'Пионерская',
      time_on_transport: '5 минут',
      time_on_foot: '10 минут'
    }];
  }
});