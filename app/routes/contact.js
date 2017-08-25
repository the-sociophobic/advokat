import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Контакты',
  
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});
