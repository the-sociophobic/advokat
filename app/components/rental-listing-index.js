import Ember from 'ember';

export default Ember.Component.extend({
  slideIndex: 0,
  
  didInsertElement() {
    var images = this.$('img');
    for(var i = 0; i < images.length; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 284 / 240) ? ' landscape' : ' portrait';
      });
    }
  },
  
  actions: {
    nextImage() {
      this.set('slideIndex', (this.get('slideIndex') + 1) % this.get('rental.images.length'));
    },
    prevImage() {
      this.set('slideIndex', (this.get('rental.images.length') + this.get('slideIndex') - 1) % this.get('rental.images.length'));
    }
  }
});
