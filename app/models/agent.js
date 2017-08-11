import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  surname: DS.attr(),
  middlename: DS.attr(),
  
  phone: DS.attr(),
  email: DS.attr(),

  rentals: DS.hasMany('rental', { async: true })
});
