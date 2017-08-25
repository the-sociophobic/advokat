import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Услуги',
  
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});
