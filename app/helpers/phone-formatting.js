import Ember from 'ember';

export function phoneFormatting(number) {
  return '+7 (' + number.toString().slice(0, 3) + ') ' + number.toString().slice(3, 6) + '-' + number.toString().slice(6, 8) + '-' + number.toString().slice(8, 10);
}

export default Ember.Helper.helper(phoneFormatting);
