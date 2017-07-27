import Ember from 'ember';

export function date(params) {
  return params.toString().slice(8, 10) + '.' + params.toString().slice(5, 7) + '.' + params.toString().slice(0, 4);
}

export default Ember.Helper.helper(date);
