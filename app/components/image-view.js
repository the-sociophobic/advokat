import Ember from 'ember';

export default Ember.Component.extend({
  slideIndex: 0,
  offset: 0,
  zoomed: false,
  dragged: true,

  arrayChanged: Ember.computed('images.@each.link', () => {
    alert('a');
    this.rerender();
    return 0;
  }),
  
  didRender() {
    var images = this.$('.image-container img');
    for(var i = 0; i < images.length; i++) {
      images[i].addEventListener('load', function() {
        this.className += (this.width / this.height > 92 / 60) ? ' landscape' : ' portrait';
      });
    }
  },
  
  actions: {
    addUser(a) {
      alert(a);
    },
    nextImage() {
      let index = this.get('slideIndex');
      let offset = this.get('offset');
      let length = this.get('images.length');
      
      index = (index + 1) % length;
      if (!this.get('edit'))
        if (index == 0)
          offset = 0;
        else if (index != length - 1)
          while (index - offset > 4)
            offset++;
        
      this.set('slideIndex', index);
      this.set('offset', offset);
    },
    prevImage() {
      let index = this.get('slideIndex');
      let offset = this.get('offset');
      let length = this.get('images.length');
      
      index = (length + index - 1) % length;
      if (!this.get('edit'))
        if (index == length - 1)
          offset = length - 6;
        else while (index - offset < 1)
          offset--;
      
      this.set('slideIndex', index);
      this.set('offset', offset);
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
