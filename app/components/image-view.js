import Ember from 'ember';

export default Ember.Component.extend({
  slideIndex: 0,
  
  model(params) {
    return this.get('store').findRecord('rental', params.rental_id);
  },
    
  didInsertElement() {
    this._super(...arguments);
    
    var smallImages = document.querySelectorAll('.image-preview .image-container img');

    for(var j = 0; j < smallImages.length; j++) {
      smallImages[j].addEventListener('load', function() {
        this.className += (this.width / this.height > 141 / 100) ? ' landscape' : ' portrait'; });
    }
  },
  
  actions: {
    nextImage() {
      this.set('slideIndex', (this.get('slideIndex') + 1) % this.get('images.length'));
    },
    prevImage() {
      this.set('slideIndex', (this.get('images.length') + this.get('slideIndex') - 1) % this.get('images.length'));
    }
  }
});
