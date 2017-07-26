import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  date: new Date(),
  title: 'zzz',
  body: 'zzzr',

  actions: {
    add() {      
      let post = this.get('store').createRecord('post', {
        date: this.get('date'),
        title: this.get('title'),
        body: this.get('body')
      });

      post.save();
    }
  }
});
