import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr(),
  uploadDate: DS.attr()
});
