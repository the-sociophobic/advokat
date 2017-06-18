import Ember from 'ember';

export function priceShort(params/*, hash*/) {
  if (params >= 1000000) {
    var shorten = params / 1000000;

    if (shorten - Math.floor(shorten) > 0) {
      return shorten.toFixed(1).toString().replace(".", ",") + ' млн.';}
    else {
      return shorten.toFixed().toString().replace(".", ",") + ' млн.';}
  }
  var shorten = params / 1000;

  if (shorten - Math.floor(shorten) > 0) {
    return shorten.toFixed(1).toString().replace(".", ",") + ' тыс.';}
  else {
    return shorten.toFixed().toString().replace(".", ",") + ' тыс.';}
}

export default Ember.Helper.helper(priceShort);
