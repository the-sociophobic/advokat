import Ember from 'ember';

export function addition([a, b]) {
  return a + b;
}

export default Ember.Helper.helper(addition);
