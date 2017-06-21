import Ember from 'ember';

export function ifIn([array, elem]) {
  return array.indexOf(elem) == -1 ? false : true;
}

export default Ember.Helper.helper(ifIn);
