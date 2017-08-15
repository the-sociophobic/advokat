import Ember from 'ember';

export default Ember.Component.extend({
  slideIndex: 0,
  store: Ember.inject.service(),
  rental: undefined,
  init() {
    this._super(...arguments);
    this.get('store').findRecord('rental', this.get('editable').id).then(rental => {
      this.set('rental', rental);
    });
  },

  didInsertElement() {
    this._super(...arguments);
    var images = document.querySelectorAll('.image-container img');
    
    for(var i = 0, len = images.length; i < len; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 284 / 240) ? ' landscape' : ' portrait'; });
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
