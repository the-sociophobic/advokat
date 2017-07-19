import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  /* names of attributes */
  keyForAttribute: function(key) { return key; },
  
  /* parse RESTheart's '_embedded' into 'data' */
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    payload = { data: payload._embedded };
    
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
