import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Новости',
  
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  },
  
  model() {
    return this.get('store').findAll('post', { reload: true });
  }
});
