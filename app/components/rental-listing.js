import Ember from 'ember';

export default Ember.Component.extend({
  slideIndex: 0,
  
  didInsertElement() {
    this._super(...arguments);
    var images = document.querySelectorAll('.image-container img');
    
    for(var i = 0, len = images.length; i < len; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 240 / 188) ? ' landscape' : ' portrait'; });
    }
  },
  
  actions: {
    nextImage() {
      this.set('slideIndex', (this.get('slideIndex') + 1) % this.get('images').get('length'));
    },
    prevImage() {
      this.set('slideIndex', (this.get('images').get('length') + this.get('slideIndex') - 1) % this.get('images').get('length'));
    }
  }
});
