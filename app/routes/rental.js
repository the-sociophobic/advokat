import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('rental', params.rental_id);
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