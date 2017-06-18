import Ember from 'ember';

export function less([a, b]) {
  return (a < b);
}

export default Ember.Helper.helper(less);
