import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    add() {      
      let post = this.get('store').createRecord('post', {
        date: '2',
        title: 'zzz',
        body: 'zzzr'
      });

      post.save();
    }
  }
});
