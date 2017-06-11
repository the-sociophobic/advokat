import DS from 'ember-data';

export default DS.Model.extend({
  rental: DS.belongsTo('rental'),
  url: DS.attr(),
  width: DS.attr(),
  height: DS.attr()
});
