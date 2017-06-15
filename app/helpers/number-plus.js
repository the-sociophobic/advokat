import Ember from 'ember';

export function numberPlus([value, max]) {
  if (value >= max * 0.998)
    return '+';
  return '';
}

export default Ember.Helper.helper(numberPlus);
