import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  
  type: 'купить',
  property_type: 'жилая',
  
  actions: {
    newRental() {
      this.set('editableRental',   this.get('store').createRecord('rental'));
    },
    editRental(id) {
      var that = this;
      this.get('store').findRecord('rental', id).then(function(rental) {
        that.set('editableRental', rental);
      });
    },
    discardRental() {
      this.set('editableRental', false);
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
    saveRental() {
      this.get('editableRental').save();
      this.set('editableRental', false);
    },
  }
});
