import Ember from 'ember';

export function dotToComma(params/*, hash*/) {
  return params.toString().replace(/\./g, ',');
}

export default Ember.Helper.helper(dotToComma);
