import Ember from 'ember';

export function or([a, b]) {
  return a || b;
}

export default Ember.Helper.helper(or);
