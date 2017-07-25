import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  /* names of attributes */
  keyForAttribute: function(key) { return key; },
  
  /* parse RESTheart's '_embedded' into 'data' */
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    if (payload.hasOwnProperty('_embedded')) {
      payload = { data: payload._embedded };
      for (var i = 0; i < payload.data.length; i++)
        payload.data[i].id = payload.data[i]._id.$oid;
    } else {
      payload.id = payload._id.$oid;
      payload = { data: payload };
    }
    
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  
  /* data into json */
  serialize(snapshot, options) {
    let json = this._super(...arguments);

    json = json.data;
    json.type = json.type.slice(0, -1);
    json.id = 3;

    return json;
  },
});
