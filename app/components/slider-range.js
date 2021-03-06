import Ember from 'ember';

export default Ember.Component.extend({
  minValueActive: false,
  maxValueActive: false,
  minPos: undefined,
  maxPos: undefined,

  init() {
    this._super(...arguments);

    this.set('minPos', (this.get('minValue') - this.get('min')) / (this.get('max') - this.get('min')));
    this.set('maxPos', (this.get('maxValue') - this.get('min')) / (this.get('max') - this.get('min')));
  },
  
  actions: {
    minValueMouseDown() {
      this.set('minValueActive', true);
    },
    minValueMouseUp() {
      this.set('minValueActive', false);
    },
    maxValueMouseDown() {
      this.set('maxValueActive', true);
    },
    maxValueMouseUp() {
      this.set('maxValueActive', false);
    },
    
    minValueMouseMove() {
      var mouseX = event.clientX;
      var offset = event.target.parentElement.getBoundingClientRect().left;
      var mousePercent = (mouseX - offset) / parseInt(this.get('width'), 10); 

      if (this.get('minValueActive') && mousePercent >= 0 && mousePercent <= this.get('maxPos') - 0.08)
        {
          this.set('minPos', mousePercent);
        if (this.get('step') - Math.floor(this.get('step')) > 0) {
          this.set('minValue', this.get('min') + (Math.ceil((mousePercent * (this.get('max') - this.get('min'))) / this.get('step')) * this.get('step')).toFixed(1) );}
        else {
          this.set('minValue', this.get('min') +  Math.ceil((mousePercent * (this.get('max') - this.get('min'))) / this.get('step')) * this.get('step') );}
        }
    },
    
    maxValueMouseMove() {
      var mouseX = event.clientX;
      var offset = event.target.parentElement.getBoundingClientRect().left;
      var mousePercent = (mouseX - offset) / parseInt(this.get('width'), 10); 

      if (this.get('maxValueActive') && mousePercent <= 1 && mousePercent >= this.get('minPos') + 0.08)
      {
        this.set('maxPos', mousePercent);
        if (this.get('step') - Math.floor(this.get('step')) > 0) {
          this.set('maxValue', this.get('min') + (Math.ceil((mousePercent * (this.get('max') - this.get('min'))) / this.get('step')) * this.get('step')).toFixed(1) );}
        else {
          this.set('maxValue', this.get('min') +  Math.ceil((mousePercent * (this.get('max') - this.get('min'))) / this.get('step')) * this.get('step') );}
      }
    }
  }
});
