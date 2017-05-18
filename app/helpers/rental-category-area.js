import Ember from 'ember';

export function rentalCategoryArea([category, living, kitchen]) {
  if (category === 'квартира' || category === 'дом') {
    return 'жилая ' + living + ' м²<br>кухня ' + kitchen + ' м²';}
}

export default Ember.Helper.helper(rentalCategoryArea);
