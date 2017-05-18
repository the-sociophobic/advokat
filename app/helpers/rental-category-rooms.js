import Ember from 'ember';

export function rentalCategoryRooms([category, rooms]) {
  if (category === 'квартира') {
    return rooms + ' комнатная<br>квартира';}
  if (category === 'дом') {
    return rooms.toString() + ' комнатный<br>дом';}
  return category;
}

export default Ember.Helper.helper(rentalCategoryRooms);
