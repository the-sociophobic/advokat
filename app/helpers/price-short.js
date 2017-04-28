import Ember from 'ember';

export function priceShort(params/*, hash*/) {
  var shorten = params / 1000000;
  
  if (shorten - Math.floor(shorten) > 0)
    return shorten.toFixed(1) + ' млн.';
  else
    return shorten.toFixed() + ' млн.';
}

export default Ember.Helper.helper(priceShort);
