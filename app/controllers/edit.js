import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  
  editableRental: undefined,
  editableFeedback: undefined,
  editablePost: undefined,
  
  actions: {
    newRental() {
      this.set('editableRental',   this.get('store').createRecord('rental'));
    },
    newFeedback() {
      this.set('editableFeedback', this.get('store').createRecord('feedback'));
    },
    newPost() {
      this.set('editablePost',     this.get('store').createRecord('post'));
    },
    
    editRental(id) {
      var that = this;
      this.get('store').findRecord('rental', id).then(function(rental) {
        that.set('editableRental', rental);
      });
    },
    editFeedback(id) {
      var that = this;
      this.get('store').findRecord('feedback', id).then(function(feedback) {
        that.set('editableFeedback', feedback);
      });
    },
    editPost(id) {      
      var that = this;
      this.get('store').findRecord('post', id).then(function(post) {
        that.set('editablePost', post);
      });
    },

    discardRental() {
      this.set('editableRental', false);
    },
    discardFeedback() {
      this.set('editableFeedback', false);
    },
    discardPost() {      
      this.set('editablePost', false);
    },
    
    deleteRental(id) {
      if (id)
        this.get('store').findRecord('rental', id, { backgroundReload: false }).then(function(rental) {
          rental.destroyRecord();
        });
      else
        this.get('editableRental').destroyRecord();
      this.set('editableRental', false);
    },
    deleteFeedback(id) {
      if (id)
        this.get('store').findRecord('feedback', id, { backgroundReload: false }).then(function(feedback) {
          feedback.destroyRecord();
        });
      else
        this.get('editableFeedback').destroyRecord();
      this.set('editableFeedback', false);
    },
    deletePost(id) {      
      if (id)
        this.get('store').findRecord('post', id, { backgroundReload: false }).then(function(post) {
          post.destroyRecord();
        });
      else
        this.get('editablePost').destroyRecord();
      this.set('editablePost', false);
    },
    
    saveRental() {
      this.get('editableRental').save();
      this.set('editableRental', false);
    },
    saveFeedback() {
      this.get('editableFeedback').save();
      this.set('editableFeedback', false);
    },
    savePost() {      
      this.get('editablePost').save();
      this.set('editablePost', false);
    },
  }
});
