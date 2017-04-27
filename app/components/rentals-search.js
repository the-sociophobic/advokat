import Ember from 'ember';

export default Ember.Component.extend({
  roomsMin: 1,
  roomsMax: 15,
  areaMin: 5,
  areaMax: 400,
  priceMin: 1,
  priceMax: 70,
  
  flatType: ['Квартира', 'Комната', 'Студия'],
  District: ['Адмиралтейский','Василеостровский','Выборгский','Калининский','Кировский','Колпинский','Красногвардейский','Красносельский','Кронштадтский','Курортный','Московский','Невский','Петроградский','Петродворцовый','Приморский','Пушкинский','Фрунзенский','Центральный'],
  
  isHidden: false,
  actions: {
    Hide() {
      this.set('isHidden', true);
    },
    unHide() {
      this.set('isHidden', false);
    }
  }
});
