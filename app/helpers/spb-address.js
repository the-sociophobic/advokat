import Ember from 'ember';

export function spbAddress(params) {
  return 'Санкт-Петербург, ' + params;
}

export default Ember.Helper.helper(spbAddress);
