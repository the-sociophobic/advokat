import Ember from 'ember';

export function daNet(params) {
  if (params == false || params == 'нет' || params == 'false')
    return false;
  return true;
}

export default Ember.Helper.helper(daNet);
