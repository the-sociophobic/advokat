import DS from 'ember-data';

export default DS.Model.extend({
  /*
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr()
  /* Site */
  type: DS.attr('string'),
  property_type: DS.attr('string'),
  category:  DS.attr('string'), /* владелец */
  description: DS.attr('string'),
  image: DS.hasMany('string'),

  price: DS.attr('number'),

  area: DS.attr('number'),
  living_space: DS.attr('number'),
  kitchen_space: DS.attr('number'),
  rooms: DS.attr('number'),
  floor: DS.attr('number'),

  address: DS.attr('string'),
  district: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  metro: DS.attr('string'),
  time_on_transport: DS.attr('number'),
  time_on_foot: DS.attr('number'),
  
  /* Yandex
  type: DS.attr(),
  property_type: DS.attr(),
  category: DS.attr(),
  commerical_type: DS.attr(),
  commerical_building_tupe: DS.attr(),
  purpose: DS.attr(),
  purpose_warehouse: DS.attr(),
  lot_number: DS.attr(),
  cadastral_number: DS.attr(),
  url: DS.attr(),
  creation_date: DS.attr(),
  last_update_date: DS.attr(),
  expire_date: DS.attr(),
  payed_adv: DS.attr(),
  manually_added: DS.attr(),
  vas: DS.attr(),
  location: DS.attr(),
  country: DS.attr(),
  region: DS.attr(),
  district: DS.attr(),
  locality_name: DS.attr(),
  sub_locality_name: DS.attr(),
  address: DS.attr(),
  apartment: DS.attr(),
  direction: DS.attr(),
  distance: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  metro: DS.attr(),
  name: DS.attr(),
  time_on_transport: DS.attr(),
  time_on_foot: DS.attr(),
  railway_station: DS.attr()
  */
});
