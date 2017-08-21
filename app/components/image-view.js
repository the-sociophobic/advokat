import Ember from 'ember';

export default Ember.Component.extend({
  slideIndex: 0,
  zoomed: false,

  arrayChanged: Ember.computed('images.@each.link', () => {
    alert('a');
    this.rerender();
    return 0;
  }),
  
  didInsertElement() {
    var images = this.$('.image-preview .image-container img');
    for(var i = 0; i < images.length; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 141 / 100) ? ' landscape' : ' portrait';
      });
    }
  },
  
  actions: {
    nextImage() {
      this.set('slideIndex', (this.get('slideIndex') + 1) % this.get('images.length'));
    },
    prevImage() {
      this.set('slideIndex', (this.get('images.length') + this.get('slideIndex') - 1) % this.get('images.length'));
    },
    setSlideIndex(index) {
      this.set('slideIndex', index);
    },
    delete() {
      this.get('images').splice(this.get('slideIndex'), 1);
      if(this.get('slideIndex') === 0)
        this.send('nextImage');
      else
        this.send('prevImage');
    },
    zoomIn() {
      this.set('zoomed', true);
    },
    zoomOut() {
      this.set('zoomed', false);
    }
  },
});
