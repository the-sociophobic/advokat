import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  name: DS.attr(),
  phone: DS.attr(),
  email: DS.attr(),
  message: DS.attr(),
  date: DS.attr(),
});
