import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  slideIndex: 1,
  firstTime: true,
  length: undefined,
  
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    nextImage() {
      var images = event.target.parentElement.getElementsByTagName("img");
      
      if (this.get('firstTime')) {
        this.set('firstTime', false);
        var images = event.target.parentElement.getElementsByTagName("img");
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
