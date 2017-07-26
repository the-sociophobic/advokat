import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  accepted: true,
  
  actions: {
    toggleAccepted() {
      this.toggleProperty('accepted');
    },
    toggleShown() {
      this.toggleProperty('shown');
    },
    add() {
      var { title, name, phone, message } = this.getProperties('title', 'name', 'phone', 'message');
      if (this.get('accepted') && (name && phone && message)) {
        let callback = this.get('store').createRecord('callback', {
          title: title,
          name: name,
          phone: phone,
          message: message,
          email: '-',
          date: new Date()
        });

        callback.save();
        this.send('toggleShown')
      }
    }
  }
});
