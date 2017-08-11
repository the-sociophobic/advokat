import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  agent: undefined,
  init() {
    this._super(...arguments);
    if (this.get('editable'))
      this.get('store').findRecord('agent', this.get('editable').id).then(agent => {
        this.set('agent', agent);
      });
    else
      this.set('agent', this.get('store').createRecord('agent'));
  },
  
  actions: {
    save() {
      this.get('agent').save();
      window.history.back();
    },
    cancel() {
      window.history.back();
    },
    delete() {
      this.get('agent').destroyRecord();
      window.history.back();
    }
  }
});
