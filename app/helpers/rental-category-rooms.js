import Ember from 'ember';

export function rentalCategoryRooms([category, rooms]) {
  if (category === 'квартира') {
    return rooms + ' комнатная';}
  if (category === 'комната') {
    if (rooms === 1)
      return 'комната';
    else
      return rooms + ' комнатны';
  }
  if (category === 'дом') {
    return 'дом';}
  return category;
}

export default Ember.Helper.helper(rentalCategoryRooms);
