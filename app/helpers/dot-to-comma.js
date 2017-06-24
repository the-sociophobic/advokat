import Ember from 'ember';

export function dotToComma(params/*, hash*/) {
  return params.toFixed(1).toString().replace(".", ",");
}

export default Ember.Helper.helper(dotToComma);
