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
    
    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload      
      uploader.upload(files).then(function(data) {
        // Handle success
      }, function(error) {
        // Handle failure
      });
    }
  }
});
