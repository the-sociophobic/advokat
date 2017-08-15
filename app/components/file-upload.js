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
        let maxDate = 0;
        let maxLink;
        that.get('store').findAll('binary').then(a => {
          a.toArray().forEach(item => {
            if (parseInt(item.get('uploadDate')) > maxDate) {
              maxDate = parseInt(item.get('uploadDate'));
              maxLink = item.get('link');
            }
          });
          let rental = that.get('rental');
          let image = that.get('store').createRecord('image', { link: maxLink, rental: rental });
          image.save();
          that.get('store').peekRecord('rental', rental.id).save();
        });
        
        //var lastUploaded = Math.max.apply(Math, a.toArray().map(img => { return parseInt(img.get('uploadDate')); }));
      });
    }
  }
});
