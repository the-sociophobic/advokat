import Ember from 'ember';

export function priceShortCalm(params) {
  var shorten = params;

  if (params >= 1000000)
    shorten /= 1000000;
  else
    shorten /= 1000;

  return shorten.toFixed(1).toString().replace(".", ",");
}
export default Ember.Helper.helper(priceShortCalm);
