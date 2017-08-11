import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  agents: undefined,
  isExpanded: false,
  any: 'Любой',
  
  init() {
    this._super(...arguments);
    this.get('store').findAll('agent').then(agents => {
      this.set('agents', agents);
    });
  },
  actions: {
    toggleExpand() {
      this.toggleProperty('isExpanded');
    },
    Expand() {
      this.set('isExpanded', true);
    },
    Collapse() {
      this.set('isExpanded', false);
    },
    toggleLabel(label) {
      this.set('selected', this.get('store').peekRecord('agent', label.id));
      this.set('isExpanded', false);
      
      this.get('commit')();
    },
    any() {
      this.set('selected', undefined);
      this.set('isExpanded', false);

      this.get('commit')();
    }
  }
});
