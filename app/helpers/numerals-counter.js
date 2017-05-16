import Ember from 'ember';

export function numeralsCounter([number, first, second, third]) {
  var modulus = number % 10;
  if ((number % 100 - modulus) !== 10)
  {
    if (modulus === 1) {
      return first;}
    if (modulus < 5 && modulus !== 0) {
      return second;}
  }
  return third;
}

export default Ember.Helper.helper(numeralsCounter);
