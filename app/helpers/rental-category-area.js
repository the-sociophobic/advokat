import Ember from 'ember';

export function rentalCategoryArea([category, living, kitchen, lot]) {
    if (category == 'квартира')
      return 'жилая ' + living + ' м²<br>кухня ' + kitchen + ' м²';
    if (category == 'дом')
      return 'жилая ' + living + ' м²<br>участок ' + lot + ' м²';
}

export default Ember.Helper.helper(rentalCategoryArea);
