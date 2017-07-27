import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  rental: undefined,
  feedback: undefined,
  post: undefined,
  
  init() {
    this._super(...arguments);
    var store = this.get('store');
    
    this.set('rental',   store.createRecord('post'));
    this.set('feedback', store.createRecord('post'));
    this.set('post',     store.createRecord('post'));
  },

  actions: {
    addRental() {
      this.get('rental').save();
    },
    addFeedback() {
      this.get('feedback').save();
    },
    addPost() {      
      this.get('post').save();
    },
  }
});
