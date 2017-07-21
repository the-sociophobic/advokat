import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    add() {      
      let feedback = this.get('store').createRecord('feedback', {
        date: '',
        title: 'haha',
        body: 'hehehe'
      });

      feedback.save();
    }
  }
});
