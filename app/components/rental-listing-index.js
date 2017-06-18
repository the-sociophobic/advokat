import Ember from 'ember';

export default Ember.Component.extend({
  slideIndex: 1,
  firstTime: true,
  length: undefined,
  
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
      var images = event.target.parentElement.getElementsByTagName("img");
      
      if (this.get('firstTime')) {
        this.set('firstTime', false);
        this.set('length',     images.length);
        this.set('slideIndex', images.length - 1);

        for (var i = 0; i < images.length; i++) {
          images[i].style.opacity = "0";
        }
      }
      
      images[this.get('slideIndex')].style.opacity = "0";
      this.set('slideIndex', (this.get('slideIndex') + 1) % this.get('length'));
      images[this.get('slideIndex')].style.opacity = "1";
    },
    prevImage() {
      var images = event.target.parentElement.getElementsByTagName("img");

      if (this.get('firstTime')) {
        this.set('firstTime', false);
        this.set('length',     images.length);
        this.set('slideIndex', images.length - 1);

        for (var i = 0; i < images.length; i++) {
          images[i].style.opacity = "0";
        }
      }
      
      images[this.get('slideIndex')].style.opacity = "0";
      this.set('slideIndex', (this.get('slideIndex') + this.get('length') - 1) % this.get('length'));
      images[this.get('slideIndex')].style.opacity = "1";
    }
  }
});
