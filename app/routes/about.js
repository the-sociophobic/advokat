import Ember from 'ember';

export default Ember.Route.extend({
  title: 'О Компании',
  
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});
