import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});