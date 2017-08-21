import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  store: Ember.inject.service(),
  url: 'http://agentstvo-adv.ru:8080/maindb/images.files',
  
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      ajaxSettings: {
        headers: {
          'Authorization': 'Basic YWRtaW46ZGVybW8zMjE=',
        }
      },
      url: this.get('url'),
    });
    
    uploader.on('didUpload', e => {
      // Handle finished upload
    });
    
    var that = this;
    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]).then(function(data) {
        // Handle success
      }, function(error) {
        // Handle failure
      let maxLink = 0;
        that.get('store').findAll('binary').then(a => {
          a.toArray().forEach(item => {
            if (maxLink === 0)
              maxLink = item.get('link');
          });
          let rental = that.get('rental');
          if (!rental.get('images')) {
            rental.set('images', []);
          }
          rental.get('images').push({ link: maxLink });
        });
        
      });
    }
  }
});
