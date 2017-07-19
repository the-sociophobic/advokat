import Ember from 'ember';

export default Ember.Component.extend({
  output: '+7 (___) ___-__-__',
  
  actions: {
    update() {
      var original = '+7 (___) ___-__-__';
      var value = this.get('value');
      var output = [];
      
      for (let i = 0, j = 0; i < original.length; i++)
        if (j < value.length && original[i] === '_') {
          output.push(value[j]);
          j++;
        }
        else
          output.push(original[i]);
      let a = [output.toString()];
      this.set('output', a);
    }
  }
});
