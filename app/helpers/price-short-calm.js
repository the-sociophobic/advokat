import Ember from 'ember';

export function priceShortCalm(params/*, hash*/) {
  var shorten = params / 1000000;
  
  return shorten.toFixed(1).toString().replace(".", ",");
}
export default Ember.Helper.helper(priceShortCalm);
