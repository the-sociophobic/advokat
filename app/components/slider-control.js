import Ember from 'ember';

export default Ember.Component.extend({
  valueActive: false,
  pos: undefined,

  init() {
    this._super(...arguments);
    this.set('pos', (this.get('value') - this.get('min')) / (this.get('max') - this.get('min')));
  },
  
  actions: {
    mouseDown() {
      this.set('valueActive', true);
    },
    mouseUp() {
      this.set('valueActive', false);
    },
    
    mouseMove() {
      if (!this.get('valueActive')) {
        return;}
      
      var mouseX = event.clientX;
      var offset = event.target.parentElement.getBoundingClientRect().left;
      var mousePercent = (mouseX - offset) / parseInt(this.get('width'), 10); 

      if (mousePercent >= 0 && mousePercent <= 1)
        {
          this.set('pos', mousePercent);
          if (this.get('step') - Math.floor(this.get('step')) > 0) {
            this.set('value', (Math.floor((mousePercent * (this.get('max') - this.get('min'))) / this.get('step')) * this.get('step')).toFixed(1) );}
          else {
            this.set('value',  Math.floor((mousePercent * (this.get('max') - this.get('min'))) / this.get('step')) * this.get('step') );}
        }
    }
  }
});
