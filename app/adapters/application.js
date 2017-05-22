import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://107.170.96.129:27017/test'
});
