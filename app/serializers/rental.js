import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({/* DS.EmbeddedRecordsMixin, {
  attrs: {
    images: {
      serialize: 'ids',
      deserialize: 'ids'
    }
  },
  */
  /* names of attributes */
  keyForAttribute: function(key) { return key; },
  
  /* parse RESTheart's '_embedded' into 'data' */
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    /* multiple records */
    if (payload.hasOwnProperty('_embedded')) {
      payload = { data: payload._embedded };
      for (var i = 0; i < payload.data.length; i++) {
        payload.data[i].id = payload.data[i]._id.$oid;
      }
    /* singular record */
    } else {
      /* if not image */
      if (payload._id) {
        payload.id = payload._id.$oid;
        payload = { data: payload };
      }
    }
    
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  
  /* data into json */
  serialize() {
    let json = this._super(...arguments);

    json = json.data;
    //json.type = json.type.slice(0, -1);
    /*
    if (json.hasOwnProperty('relationships')) {
      if (json.hasOwnProperty('images')) {
        json.relationships.images = json.images;
        delete json.images;
      }
      if (json.relationships.hasOwnProperty('agent')) {
        console.log(JSON.stringify(json, null, 4));
        //json.relationships.rental.data.type = json.relationships.rental.data.type.slice(0, -1);
      }
    }
    */
    return json;
  },
});
