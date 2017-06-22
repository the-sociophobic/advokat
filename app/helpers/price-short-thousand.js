import Ember from 'ember';

export function priceShortThousand(params/*, hash*/) {
  var shorten = params / 1000;

  return shorten.toFixed(1).toString().replace(".", ",");
}

export default Ember.Helper.helper(priceShortThousand);
