import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  /* names of attributes */
  keyForAttribute: function(key) { return key; },
  
  /* parse RESTheart's '_embedded' into 'data' */
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    var a = JSON.stringify(payload._embedded, null);
    var data = [];

    let _id = "";
    let uploadDate = "";
    let link = "";

    for (let i = 0; i < a.length; i++) {
      
      if(a.charAt(i) === '_' && a.charAt(i + 1) === 'i' && a.charAt(i + 2) === 'd') {
        i += 14;
        while(a.charAt(i) != '\"')
          _id += a.charAt(i++);
      }
      if(a.charAt(i) == '$' && a.charAt(i + 1) == 'd' && a.charAt(i + 2) == 'a' && a.charAt(i + 3) == 't' && a.charAt(i + 4) == 'e') {
        i += 7;
        while(a.charAt(i) != '}')
          uploadDate += a.charAt(i++);
      }
      if(a.charAt(i) == 'h' && a.charAt(i + 1) == 'r' && a.charAt(i + 2) == 'e' && a.charAt(i + 3) == 'f') {
        i += 8;
        while(a.charAt(i) != '\"') {
          link += a.charAt(i++);
        }
      }
      
      if (_id.length > 0 && uploadDate.length > 0 && link.length > 0) {
        data.push({ id: _id, type: 'binary', attributes: { link: 'http://agentstvo-adv.ru:8080/' + link, uploadDate: uploadDate } });
        _id = "";
        uploadDate = "";
        link = "";
      }
    }
    payload = { data: data };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  
  /* data into json */
  serialize() {
    let json = this._super(...arguments);

    json = json.data;
    json.type = json.type.slice(0, -1);

    return json;
  },
});
