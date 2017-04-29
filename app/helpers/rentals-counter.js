import Ember from 'ember';

export function rentalsCounter(params/*, hash*/) {
  var modulus = params % 10;
  if (params % 100 - modulus != 10)
  {
    if (modulus == 1)
      return params + ' предложение';
    if (modulus < 5 && modulus != 0)
      return params + ' предложения';
  }
  return params + ' предложений';
}

export default Ember.Helper.helper(rentalsCounter);
