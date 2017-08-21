import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  slideIndex: 0,
  
  didInsertElement() {
    var images = this.$('img');
    for(var i = 0; i < images.length; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 240 / 188) ? ' landscape' : ' portrait';
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
