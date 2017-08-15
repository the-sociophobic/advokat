import ApplicationSerializer from './application';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    images: {
      serialize: 'records',
      deserialize: 'records'
    }
  },
  
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    alert('e');
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  
  /* data into json */
  serialize() {}
});
