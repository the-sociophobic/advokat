import DS from 'ember-data';

export default DS.Model.extend({
  _links: {
    rh: {
      data: {
        href: DS.attr()
      }
    }
  }
});
