import Ember from 'ember';

export default Ember.Helper.helper(function([arg1, arg2]) {
  return (arg1 / arg2 / 1000).toFixed(1).toString().replace(".", ",") + ' тыс.';
});