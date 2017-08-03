import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  
  editableRental: undefined,
  editableAgent: undefined,
  editableFeedback: undefined,
  editablePost: undefined,
  
  actions: {
    images() {
      var images = Ember.$.ajax({
        url: "http://agentstvo-adv.ru:8080/maindb/images.files",
        type: 'GET',
        headers: {
          Authorization: 'Basic YWRtaW46ZGVybW8zMjE=',
        }
      });
      alert(JSON.stringify(images, null, 4));
    },
    newRental() {
      this.set('editableRental',   this.get('store').createRecord('rental'));
    },
    newAgent() {
      this.set('editableAgent',    this.get('store').createRecord('agent'));
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
    editAgent(id) {
      var that = this;
      this.get('store').findRecord('agent', id).then(function(agent) {
        that.set('editableAgent', agent);
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
    discardAgent() {
      this.set('editableAgent', false);
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
    deleteAgent(id) {
      if (id)
        this.get('store').findRecord('agent', id, { backgroundReload: false }).then(function(agent) {
          agent.destroyRecord();
        });
      else
        this.get('editableAgent').destroyRecord();
      this.set('editableAgent', false);
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
    saveAgent() {
      this.get('editableAgent').save();
      this.set('editableAgent', false);
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
